<script lang="ts">
	import CardJson from "../db/new_cards.json";
	import CardGuess from "../components/card_guess.svelte";
	import CardInfo from "../components/card_info.svelte";
	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';

	interface CardData {
		CardName: string;
		CardColor: string;
		CardRarity: string;
		CardType: string;
		CardCost: string;
		CardTags: string[];
	};

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'top-start'
	};

	let hiddenCard: CardData = <CardData>{};
	let cards: CardData[] = [];
	let options: AutocompleteOption<string>[] = [];
	let inputGuess: String;
	let win: boolean = false;

	function StartGame() {
		CardJson.forEach(card => {
			options.unshift({ label: card.name, value: card.name, keywords: card.name })
		});

		let randomCard: number = Math.floor(Math.random() * CardJson.length);

		hiddenCard.CardName = CardJson[randomCard].name;
		hiddenCard.CardColor = CardJson[randomCard].color;
		hiddenCard.CardRarity = CardJson[randomCard].rarity;
		hiddenCard.CardType = CardJson[randomCard].type;
		hiddenCard.CardCost = CardJson[randomCard].cost;
		hiddenCard.CardTags = CardJson[randomCard].tags;
	}

	function GuessCard() {
		let guessedCard: CardData = <CardData>{};
		let canGuess: boolean = false;

		CardJson.forEach(card => {
			if (card.name.toLowerCase() === inputGuess.toLowerCase()) {
				guessedCard.CardName = card.name;
				guessedCard.CardColor = card.color;
				guessedCard.CardRarity = card.rarity;
				guessedCard.CardType = card.type;
				guessedCard.CardCost = card.cost;
				guessedCard.CardTags = card.tags;
				canGuess = true;
			}
		});

		if (!canGuess) { return; }

		if (guessedCard.CardName === hiddenCard.CardName &&
		guessedCard.CardColor === hiddenCard.CardColor &&
		guessedCard.CardRarity === hiddenCard.CardRarity &&
		guessedCard.CardType === hiddenCard.CardType &&
		guessedCard.CardCost === hiddenCard.CardCost) {
			win = true;
		}

		cards.push(guessedCard);
		cards = cards;
	}

	function GetCard() {}

	function HandleInput(e: KeyboardEvent) {
		if (e.code == "Enter") {
			GuessCard();
			inputGuess = "";
		}
	}

	function OnFlavorSelection(event: CustomEvent<AutocompleteOption<String>>): void {
		inputGuess = event.detail.label;
	}

	StartGame();
</script>

<div class="flex w-full p-4 gap-4 min-h-screen">
	<div class="w-1/5 flex flex-col gap-2">
		<span>the ui is a big wip dont judge</span>
		<input class="text-black input autocomplete" type="search" name="autocomplete-search" bind:value={inputGuess} on:keydown={HandleInput} />
		<div class="card w-full max-h-96 overflow-y-scroll relative" tabindex="-1">
			<Autocomplete bind:input={inputGuess} options={options} on:selection={OnFlavorSelection} />
		</div>
		{#if win}
			<div>You Win!</div>
		{/if}
	</div>
	<div class="w-4/5 flex flex-col gap-2">
		<CardInfo guesses={cards} {hiddenCard} />
		<span class="grid grid-cols-5 gap-4">
			<div class="text-center text-2xl font-bold">Card</div>
			<div class="text-center text-2xl font-bold">Color</div>
			<div class="text-center text-2xl font-bold">Rarity</div>
			<div class="text-center text-2xl font-bold">Type</div>
			<div class="text-center text-2xl font-bold">Cost</div>
		</span>

		<div class="flex flex-col-reverse gap-4">
			{#each cards as card}
				<CardGuess {hiddenCard} {card} />
			{/each}
		</div>
	</div>
</div>
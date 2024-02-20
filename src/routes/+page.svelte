<script lang="ts">
	import CardJson from "../db/new_cards.json";
	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';

	interface CardData {
		CardName: string;
		CardColor: string;
		CardRarity: string;
		CardType: string;
		CardCost: string;
		CardUpgraded: string;
		CardTags: string[];
	};

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
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
		if (hiddenCard.CardName.endsWith("+")) {
			hiddenCard.CardUpgraded = "true";
			hiddenCard.CardName = hiddenCard.CardName.substring(0, hiddenCard.CardName.length - 1)
		} else {
			hiddenCard.CardUpgraded = "false";
		}
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
				if (guessedCard.CardName.endsWith("+")) {
					guessedCard.CardUpgraded = "true";
					guessedCard.CardName = guessedCard.CardName.substring(0, guessedCard.CardName.length - 1)
				} else {
					guessedCard.CardUpgraded = "false";
				}
				guessedCard.CardTags = card.tags;
				canGuess = true;
			}
		});

		if (!canGuess) { return; }

		if (guessedCard.CardName === hiddenCard.CardName &&
		guessedCard.CardColor === hiddenCard.CardColor &&
		guessedCard.CardRarity === hiddenCard.CardRarity &&
		guessedCard.CardType === hiddenCard.CardType &&
		guessedCard.CardCost === hiddenCard.CardCost &&
		guessedCard.CardUpgraded === hiddenCard.CardUpgraded) {
			win = true;
		}

		cards.unshift(guessedCard);
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
</script>

<div class="flex w-full p-4 gap-4">
	<div class="w-1/4">
		<input class="text-black input autocomplete" type="search" bind:value={inputGuess} on:keydown={HandleInput} use:popup={popupSettings} />
		<div class="card w-full max-w-sm max-h-48 overflow-y-auto relative top-0 left-0" tabindex="-1" data-popup="popupAutocomplete">
			<Autocomplete bind:input={inputGuess} options={options} on:selection={OnFlavorSelection} />
		</div>
		{#if win}
			<div>You Win!</div>
		{/if}
	</div>
	<div class="w-3/4">
		<span class="grid grid-cols-7">
			<div>Card</div>
			<div>Color</div>
			<div>Rarity</div>
			<div>Type</div>
			<div>Cost</div>
			<div>Upgrade</div>
			<div>Tags</div>
		</span>

		{#each cards as card}
			<span class="grid grid-cols-7">
				{#if card.CardName === hiddenCard.CardName}
					<div class="text-green-500">{card.CardName}</div>
				{:else}
					<div class="text-red-500">{card.CardName}</div>
				{/if}

				{#if card.CardColor === hiddenCard.CardColor}
					<div class="text-green-500">{card.CardColor}</div>
				{:else}
					<div class="text-red-500">{card.CardColor}</div>
				{/if}

				{#if card.CardRarity === hiddenCard.CardRarity}
					<div class="text-green-500">{card.CardRarity}</div>
				{:else}
					<div class="text-red-500">{card.CardRarity}</div>
				{/if}

				{#if card.CardType === hiddenCard.CardType}
					<div class="text-green-500">{card.CardType}</div>
				{:else}
					<div class="text-red-500">{card.CardType}</div>
				{/if}

				{#if card.CardCost === hiddenCard.CardCost}
					<div class="text-green-500">{card.CardCost}</div>
				{:else}
					<div class="text-red-500">{card.CardCost}</div>
				{/if}

				{#if card.CardUpgraded === hiddenCard.CardUpgraded}
					<div class="text-green-500">{card.CardUpgraded}</div>
				{:else}
					<div class="text-red-500">{card.CardUpgraded}</div>
				{/if}

				<div>
					{#each card.CardTags as tag}
						{#if hiddenCard.CardTags.includes(tag)}
							<div class="text-green-500">{tag}</div>
						{:else}
							<div class="text-red-500">{tag}</div>
						{/if}
					{/each}
				</div>
			</span>
		{/each}
	</div>
</div>

<style lang="sass">
	input
		text-color: black
</style>

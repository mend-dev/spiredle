<script lang="ts">
	import CardJson from "../../db/cards.json";
	import CardGuess from "../../components/card_guess.svelte";
	import CardInfo from "../../components/card_info.svelte";
    import Answers from "../../db/not_answers/answers.json";
    import { onMount } from "svelte";
	import { Autocomplete, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';

	interface CardData {
		CardName: string;
		CardColor: string;
		CardRarity: string;
		CardType: string;
		CardCost: string;
		CardTags: string[];
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
        options = options

        let startDate = new Date("02/20/2024");
        let currentDate = new Date();
 
        let timeDif = currentDate.getTime() - startDate.getTime();
        let dayDif = Math.round(timeDif / (1000 * 3600 * 24)) - 1;
        if (dayDif < 0) { dayDif = 0; }
		let cardIndex: number = Answers[dayDif].index;

		hiddenCard.CardName = CardJson[cardIndex].name;
		hiddenCard.CardColor = CardJson[cardIndex].color;
		hiddenCard.CardRarity = CardJson[cardIndex].rarity;
		hiddenCard.CardType = CardJson[cardIndex].type;
		hiddenCard.CardCost = CardJson[cardIndex].cost;
		hiddenCard.CardTags = CardJson[cardIndex].tags;
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

	function HandleInput(e: KeyboardEvent) {
		if (e.code == "Enter") {
			GuessCard();
			inputGuess = "";
		}
	}

	function OnFlavorSelection(event: CustomEvent<AutocompleteOption<String>>): void {
		inputGuess = event.detail.label;
		GuessCard();
		inputGuess = "";
	}


    onMount(StartGame);
</script>

<svelte:head>
	<title>Spiredle Daily</title>
</svelte:head>


<div class="flex md:flex-row flex-col w-full md:p-4 p-2 gap-4 min-h-screen">
	<div class="md:w-1/5 w-full flex flex-col gap-2">
		<input class="text-black input autocomplete" type="search" name="autocomplete-search" bind:value={inputGuess} on:keydown={HandleInput} />
		<div class="card w-full md:max-h-72 max-h-48 overflow-y-scroll relative" tabindex="-1">
			<Autocomplete bind:input={inputGuess} options={options} on:selection={OnFlavorSelection} />
		</div>

		<Accordion class="hidden md:block">
			<AccordionItem>
				<svelte:fragment slot="summary">Rules</svelte:fragment>
				<svelte:fragment slot="content">
					<ul class="list flex flex-col gap-2">
						<li>- Confirmed info is shown at the top</li>
						<li>- Tags are just specific in Card Text</li>
						<li>- Includes Curses, Statuses, Created Cards</li>
						<li>- Unplayable Cards will have a blank cost</li>
						<li>- There is no Daily Card yet but eventually</li>
						<li>- Have fun</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">Info</svelte:fragment>
				<svelte:fragment slot="content">
					<ul class="list flex flex-col gap-2">
						<li>Made by menddev in chat</li>
						<li>- I get my first ever a20 win the other day, it was on Ironclad :D</li>
						<li>- the ui is a big wip dont judge</li>
						<li>- let me know if you got any suggestions</li>
						<li>- also if you want me to make any other wordle type games im down</li>
						<li>- oh by the way no mobile layout yet because im lazy</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>

		{#if win}
			<div>You Win!</div>
		{/if}
	</div>
	<div class="md:w-4/5 w-full flex flex-col gap-2">
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
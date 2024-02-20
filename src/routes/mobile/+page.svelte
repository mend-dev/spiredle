<script lang="ts">
	import CardJson from "../../db/new_cards.json";

	interface CardData {
		CardName: string;
		CardColor: string;
		CardRarity: string;
		CardType: string;
		CardCost: string;
		CardUpgraded: string;
		CardTags: string[];
	};

	let hiddenCard: CardData = <CardData>{};
	let cards: CardData[] = [];
	let inputGuess: String;
	let win: boolean = false;

	function StartGame() {

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

	function SubmitGuess() {
		GuessCard();
		inputGuess = "";
	}

	StartGame();
</script>

<div class="flex w-full flex-col p-4 gap-4">
	<div>
		<div class="flex flex-col gap-2">
			<input class="text-black input autocomplete" bind:value={inputGuess} />
			<button class="w-full btn variant-filled-primary" on:click={SubmitGuess}>Submit</button>
			{#if win}
				<div>You Win!</div>
			{/if}
		</div>
	</div>
	<div>
		<span class="grid grid-cols-6">
			<div>Card</div>
			<div>Color</div>
			<div>Rarity</div>
			<div>Type</div>
			<div>Cost</div>
			<div>Tags</div>
		</span>

		{#each cards as card}
			<span class="grid grid-cols-6">
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

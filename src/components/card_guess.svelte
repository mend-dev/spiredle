<script lang="ts">
	import ValueSquare from "./value_square.svelte";

    export let hiddenCard: CardData
    export let card: CardData

    interface CardData {
        CardName: string;
        CardColor: string;
        CardRarity: string;
        CardType: string;
        CardCost: string;
        CardTags: string[];
    };
</script>

<div class="flex flex-col gap-2">
    <span class="grid grid-cols-5 md:gap-2 gap-1">
        <ValueSquare value={card.CardName} matchValue={hiddenCard.CardName} />
        <ValueSquare value={card.CardColor} matchValue={hiddenCard.CardColor} />
        <ValueSquare value={card.CardRarity} matchValue={hiddenCard.CardRarity} />
        <ValueSquare value={card.CardType} matchValue={hiddenCard.CardType} />
        <ValueSquare value={card.CardCost} matchValue={hiddenCard.CardCost} />
    </span>

    <div class="flex gap-2">
        {#each card.CardTags as tag}
            {#if hiddenCard.CardTags.includes(tag)}
                <div class="badge variant-filled-success">{tag}</div>
            {:else}
                <div class="badge variant-filled-error">{tag}</div>
            {/if}
        {/each}
    </div>

    <hr class="!border-t-1" />
</div>

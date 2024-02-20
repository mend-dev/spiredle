<script lang="ts">
    import { onMount } from "svelte";

    export let confirmedInfo: CardData = <CardData>{
        CardName: "???",
        CardColor: "???",
        CardRarity: "???",
        CardType: "???",
        CardCost: "???",
        CardTags: ["Tags:"],
    };
    export let guesses: CardData[];
    export let hiddenCard: CardData;

    interface CardData {
        CardName: string;
        CardColor: string;
        CardRarity: string;
        CardType: string;
        CardCost: string;
        CardTags: string[];
    };

    function UpdateInfo() {
        if (guesses.length === 0) { return; }
        let latestGuess = guesses[guesses.length - 1];

        if (confirmedInfo.CardName === "???" && latestGuess.CardName === hiddenCard.CardName) { confirmedInfo.CardName = hiddenCard.CardName; }
        if (confirmedInfo.CardColor === "???" && latestGuess.CardColor === hiddenCard.CardColor) { confirmedInfo.CardColor = hiddenCard.CardColor; }
        if (confirmedInfo.CardRarity === "???" && latestGuess.CardRarity === hiddenCard.CardRarity) { confirmedInfo.CardRarity = hiddenCard.CardRarity; }
        if (confirmedInfo.CardType === "???" && latestGuess.CardType === hiddenCard.CardType) { confirmedInfo.CardType = hiddenCard.CardType; }
        if (confirmedInfo.CardCost === "???" && latestGuess.CardCost === hiddenCard.CardCost) { confirmedInfo.CardCost = hiddenCard.CardCost; }
    
        for (let i = 0; i < latestGuess.CardTags.length; i++) {
            if (hiddenCard.CardTags.includes(latestGuess.CardTags[i]) &&
            !confirmedInfo.CardTags.includes(latestGuess.CardTags[i])) {
                confirmedInfo.CardTags.push(latestGuess.CardTags[i]);
            }
        }

        confirmedInfo = confirmedInfo;
    }

    $: guesses, UpdateInfo();
</script>

<div class="flex flex-col gap-2">
    <div class="grid grid-cols-5 gap-4">
        <div class="card rounded-lg p-2 flex justify-center items-center aspect-video variant-filled-surface">
            <span class="text-xl font-bold text-gray-50">{confirmedInfo.CardName}</span>
        </div>
        <div class="card rounded-lg p-2 flex justify-center items-center aspect-video variant-filled-surface">
            <span class="text-xl font-bold text-gray-50">{confirmedInfo.CardColor}</span>
        </div>
        <div class="card rounded-lg p-2 flex justify-center items-center aspect-video variant-filled-surface">
            <span class="text-xl font-bold text-gray-50">{confirmedInfo.CardRarity}</span>
        </div>
        <div class="card rounded-lg p-2 flex justify-center items-center aspect-video variant-filled-surface">
            <span class="text-xl font-bold text-gray-50">{confirmedInfo.CardType}</span>
        </div>
        <div class="card rounded-lg p-2 flex justify-center items-center aspect-video variant-filled-surface">
            <span class="text-xl font-bold text-gray-50">{confirmedInfo.CardCost}</span>
        </div>
    </div>

    <div class="flex gap-2">
        {#each confirmedInfo.CardTags as tag}
            <div class="badge variant-filled-success">{tag}</div>
        {/each}
    </div>
</div>

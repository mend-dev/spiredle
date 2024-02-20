<script lang="ts">
    import { onMount } from "svelte";

    export let value: any;
    export let matchValue: any;

    let cardStyle: string;
    let textStyle: string;

    function GetColor() {
        if (value === matchValue) {
            cardStyle = "variant-filled-success";
            textStyle = "text-emerald-500";
        } else {
            cardStyle = "variant-filled-error";
            textStyle = "text-rose-600";
        }
    }

    onMount(GetColor);
</script>

<div class={`card rounded-lg p-2 flex justify-center items-center aspect-video ${cardStyle}`}>
    <span class={`text-lg font-bold ${textStyle}`}>{value}</span>
</div>

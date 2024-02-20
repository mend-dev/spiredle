<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    import { base } from "$app/paths";
</script>

<AppBar>
    <div slot="lead" class="flex gap-4">
        <a href={`${base}/`}>Spiredle</a>
        <a href={`${base}/daily`}>Daily</a>
        <a href={`${base}/infinite`}>Infinite</a>
    </div>
	<div slot="trail">
        <a href={`https://www.youtube.com/@menddev`}>menddev</a>
    </div>
</AppBar>

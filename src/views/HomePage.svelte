<script>
  import AddItem from "./AddItem.svelte";
  import WidgetFetcher from "../components/WidgetFetcher.svelte";

  // const widgets = localStorage.getItem()
  const widgets = [
    {
      type: "fetcher",
      content: {
        url: "https://cors-anywhere.herokuapp.com/https://www.exir.io/wp-content/themes/lore-child/ticker-variable.php",
        type: 'text' // json, *text
      }
    }
  ];
</script>

<div>
  <AddItem />

  {#each widgets as widget}
    {#if widget.type === 'fetcher'}
      <WidgetFetcher content={widget.content} />
    {/if}
  {/each}
</div>

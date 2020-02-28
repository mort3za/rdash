<script>
  import AddItem from "./AddItem.svelte";
  import WidgetFetcher from "../components/WidgetFetcher.svelte";
  import {getWidgets} from '../helpers.js'

  const widgets = getWidgets()
  console.log('widgets', widgets);
  
  // const widgets = [
  //   {
  //     id: "fetcher",
  //     content: {
  //       url:
  //         "https://cors-anywhere.herokuapp.com/https://www.exir.io/wp-content/themes/lore-child/ticker-variable.php",
  //       responseType: "text" // json, *text
  //     }
  //   }
  // ];
</script>

<div>
  <div class="toolbar">
    <AddItem />
  </div>

  {#each widgets as widget}
    {#if widget.id === 'fetcher'}
      <WidgetFetcher content={widget.content} />
    {/if}
  {/each}
</div>

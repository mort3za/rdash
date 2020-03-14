<script>
  import { getDataByPath, addNoCacheParam } from "../helpers.js";
  import { isArray } from "lodash-es";
  export let content;
  let promise;
  const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
  init();

  function init() {
    promise = run(content);
  }

  async function run({
    url,
    config,
    responseFormat,
    noCache = false,
    useProxy = false,
    jsonPath = ""
  }) {
    const defaultConfig = {
      method: "GET"
    };

    let parsedConfig;
    try {
      parsedConfig = JSON.parse(config);
    } catch (error) {
      parsedConfig = defaultConfig;
    }
    let newUrl = `${useProxy ? corsProxyUrl : ""}${url}`;
    if (noCache) {
      newUrl = addNoCacheParam(newUrl);
    }

    const res = await fetch(newUrl, parsedConfig);
    let data = await res[responseFormat]();
    data = responseFormat === "json" ? getDataByPath(data, jsonPath) : data;

    if (res.ok) {
      return data;
    } else {
      return `<small class='error'><i>Failed to load</i></small>`;
    }
  }

  async function responseConvertor(value) {
    window.value = value;
    return await value;
  }
</script>

<style>
  .action {
    cursor: pointer;
  }
  .widget--title {
    font-size: 0.75rem;
    color: #aaaaac;
    font-weight: bold;
  }
</style>

<div class="widget--content">
  <div class="widget--title mb-xs is-flex align-center">
    <span class="mr-sm">{content.title || 'Untitled'}</span>
    <div on:click={init} class="action">
      <ion-icon
        class="has-text-info is-block"
        size="small"
        src="icons/reload-circle-sharp.svg" />
    </div>
  </div>
  {#await promise}
    loading...
  {:then value}
    <div>
      {#if isArray(value) && value.length === 1}
        <span>{value}</span>
      {:else if isArray(value)}
        <table class="table is-bordered">
          <tr>
            {#each value as colValue}
              <td>{colValue}</td>
            {/each}
          </tr>
        </table>
      {:else}
        <span>{@html value}</span>
      {/if}
    </div>
  {/await}
</div>

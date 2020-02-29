<script>
  import { getDataByPath } from "../helpers.js";
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
    const newUrl = `${useProxy ? corsProxyUrl : ""}${url}`;
    const res = await fetch(newUrl, parsedConfig);
    let data = await res[responseFormat]();
    data = responseFormat === "json" ? getDataByPath(data, jsonPath) : data;

    if (res.ok) {
      return data;
    } else {
      return "failed to load";
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
</style>

<div class="widget--content">
  {#await promise}
    loading...
  {:then value}
    <div class="is-flex align-center">
      <span class="mr-sm">{value}</span>
      <div on:click={init} class="action">
        <ion-icon
          class="has-text-info"
          size="small"
          src="icons/reload-circle-sharp.svg" />
      </div>
    </div>
  {/await}
</div>

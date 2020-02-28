<script>
  export let content;
  const promise = run(content);

  async function run({ url, type }) {
    const res = await fetch(url);
    const text = await res[type]();

    if (res.ok) {
      return text;
    } else {
      return "failed to load";
    }
  }

  async function responseConvertor(value) {
    console.log(value);
    window.value = value;
    return await value;
  }
</script>

{#await promise}loading...{:then value}{value}{/await}

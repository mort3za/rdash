<script>
  import { Parser } from "expr-eval";
  export let content;
  let sourceValues = {};

  function getEquationResult(equation, sourceItems) {
    const parser = new Parser();
    if (!equation.formula) {
      return "";
    }
    const expr = parser.parse(equation.formula);
    let result = "";
    try {
      result = `<b>${expr.evaluate(sourceValues)}</b>`;
    } catch (error) {
      result = `can't evaluate`;
    }

    return result;
  }
</script>

<style>
  .widget--title {
    font-size: 0.75rem;
    color: #aaaaac;
    font-weight: bold;
  }
</style>

<div class="widget--content">
  <div class="widget--title mb-xs is-flex align-center">
    <span class="mr-sm">{content.title || 'Untitled'}</span>
  </div>

  <div>
    {#each content.sources as item}
      <input
        class="input"
        type="text"
        placeholder={`${item.title} (${item.name})`}
        bind:value={sourceValues[item.name]} />
    {/each}
    <hr />
    {#each content.equations as item}
      <div>
        {item.title}:
        {@html getEquationResult(item, content.sources)}
      </div>
    {/each}
  </div>

</div>

<!-- sample usage -->
<!-- source 1: 100, source 2: 102
difference: 2, difference percent: 2%
amount: 25
amount in source 2: 25.5
amount difference: 0.5

some sources + some expressions -->

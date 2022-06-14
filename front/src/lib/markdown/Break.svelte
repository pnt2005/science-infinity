<script>
    const raw = $$restProps.raw;
    var count = (raw.match(/\n/g) || []).length;
</script>
{#each Array(count) as i}
<br/>
{/each}
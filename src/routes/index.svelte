<script>
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
</script>

<style global>
    @import "../static/extra.css";
    @import "../static/global.css";
</style>
<CovidState />
<CovidChart />
<TableContainer />

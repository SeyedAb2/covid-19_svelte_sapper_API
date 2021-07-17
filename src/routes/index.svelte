<script context=module>
    import requests from "../data/request";
    export async function preload(){
        try{
            const usStats = await requests.usStats();
            return { usStats };
        }catch(e){
            
        }
    }
</script>
<script>
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let usStats;
    console.log(usStats,'usStats');
</script>
<svelte:head>
    <title>
        Covid 19 Tracker
    </title>
</svelte:head>
<style global>
    @import "../static/extra.css";
    @import "../static/global.css";
</style>
<div class="section header">
    <div class="container">
        <h1>
            Covid 19 - US
        </h1>
    </div>
</div>
<CovidState {...usStats}/>
<CovidChart />
<TableContainer />

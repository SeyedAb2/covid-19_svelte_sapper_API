<script context="module">
    import stateNames from "../data/stateNames";
    export async function preload(page){
        const state = page.params['state'];
        if(stateNames.find(s => s.abbreviation === state)===undefined){
            this.error(404,'State Not Found');
            return;
        }
        try{
            return {state: page.params["state"] };
        }catch(e){
            return this.error(500 ,"there was an error in calling api , please try again in 5 minutes.");
        }
    }
</script>
<script> 
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let state;
</script>
<svelte:head>
    <title>
        Covid 19 - {state}
    </title>
</svelte:head>
<div class="section header">
    <div class="container">
        <h1>
            Covid 19 - {state}
        </h1>
    </div>
</div>

<CovidState />
<CovidChart />
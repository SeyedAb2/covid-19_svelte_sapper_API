import format from './format';
import moment from 'moment';
function usStats (data){
    const [usStatRaw] = data;
    return parseStats(usStatRaw);
}
/* 

{
    "date": 20210307,
    "states": 56,
    "positive": 28756489,
    "negative": 74582825,
    "pending": 11808,
    "hospitalizedCurrently": 40199,
    "hospitalizedCumulative": 776361,
    "inIcuCurrently": 8134,
    "inIcuCumulative": 45475,
    "onVentilatorCurrently": 2802,
    "onVentilatorCumulative": 4281,
    "dateChecked": "2021-03-07T24:00:00Z",
    "death": 515151,
    "hospitalized": 776361,
    "totalTestResults": 363825123,
    "lastModified": "2021-03-07T24:00:00Z",
    "recovered": null,
    "total": 0,
    "posNeg": 0,
    "deathIncrease": 842,
    "hospitalizedIncrease": 726,
    "negativeIncrease": 131835,
    "positiveIncrease": 41835,
    "totalTestResultsIncrease": 1170059,
    "hash": "a80d0063822e251249fd9a44730c49cb23defd83"
  }

*/
function stateStats(state , data){
    const stateRawData = data.find(d => d.state === state);
    return parseStats(stateRawData);
}
function parseStats(rawStats){
    return {
        cases:format.number(rawStats.positive),
        deaths: format.number(rawStats.death),
        recovered: format.number(rawStats.recovered),
        ventilator: format.number(rawStats.onVentilatorCurrently),
        hospitalized: format.number(rawStats.hospitalized),
        icu: format.number(rawStats.inIcuCurrently),
        tested: format.number(rawStats.totalTestResults),
        updated:moment(rawStats.lastModified).format('LLL'),
    }
}
export default{
    usStats,
    stateStats,
}
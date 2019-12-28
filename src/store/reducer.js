const initialState = {
    startDate : new Date(),
    weatherDetails : [
        {
        1:  {
              "temperature":25,
              "pressure":1012,
              "humidity":81,
              "temp_min":279.15,
              "temp_max":281.15
            },
        2: {
            "temperature":30,
            "pressure":1013,
            "humidity":82,
            "temp_min":280.16,
            "temp_max":282.16
           },  
        3: {
            "temperature":35,
            "pressure":1014,
            "humidity":83,
            "temp_min":281.17,
            "temp_max":283.17
           },
        4: {
            "temperature":40,
            "pressure":1015,
            "humidity":84,
            "temp_min":283.18,
            "temp_max":285.17
           },   
        5: {
            "temperature":45,
            "pressure":1017,
            "humidity":89,
            "temp_min":286.18,
            "temp_max":289.17
           }, 
        6: {
            "temperature":55,
            "pressure":1030,
            "humidity":97,
            "temp_min":299,
            "temp_max":350
           }, 
           
        7: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           }, 
        8: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },  
        9: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },
        10: {
            "temperature":80,
            "pressure":1037,
            "humidity":99,
            "temp_min":230,
            "temp_max":450
           },
        11: {
            "temperature":54,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           }, 
        12: {
            "temperature":58,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },
        13: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },
        14: {
            "temperature":54,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
            },
        15: {
            "temperature":53,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
            },
        16: {
            "temperature":58,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
            },
        17: {
            "temperature":54,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
            },
        18: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
            },
        19: {
            "temperature":52,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":400
           },
        20: {
            "temperature":51,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":500
           },
        21: {
            "temperature":57,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":800
           },
        22: {
            "temperature":58,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":100
           },
        23: {
            "temperature":54,
            "pressure":1047,
            "humidity":99,
            "temp_min":300,
            "temp_max":100
           },
        24 : {
            "temperature":60,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":500
           },
        25: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":600
            },
        26: {
            "temperature":50,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":400
            },
        27:{
            "temperature":70,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":450
           },
        28: {
            "temperature":58,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },
        29: {
            "temperature":49,
            "pressure":1016,
            "humidity":90,
            "temp_min":298,
            "temp_max":550
           },
        30: {
            "temperature":56,
            "pressure":1267,
            "humidity":90,
            "temp_min":298,
            "temp_max":300
           },
        31: {
            "temperature":55,
            "pressure":1019,
            "humidity":98,
            "temp_min":299,
            "temp_max":650
          }
        }
    ]
}

const reducer = (state = initialState,action)=>
{ 
    switch(action.type)
    {
    case "STOREDRES":
    return {
        ...state,
        weatherDetails : state.weatherDetails.concat({id : new Date()})
    }
    default :
     return state;
}

}

export default reducer
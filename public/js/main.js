const submitted=document.getElementById("submitted");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const dataHide=document.querySelector(".middle_layer");

const getInfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==""){
        city_name.innerText=`Please Write the Name of the City before you search`;
        dataHide.classList.add("data_hide");
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a3379041341374fe6e0477516f7d95ad`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        const tempStatus=arrData[0].weather[0].main;
        if (tempStatus == "Clear") {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempStatus == "Clouds") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempStatus == "Rain") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }
        temp.innerHTML=arrData[0].main.temp;
        city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;

        dataHide.classList.remove("data_hide"); 

        }catch{
            city_name.innerText=`Please enter the existing city name`;
            dataHide.classList.add("data_hide");
        }
    }
};
submitted.addEventListener("click",getInfo);

const day=document.getElementById("day");
const today_date=document.getElementById("today_date");
const time=document.getElementById("time");

const week_day=() => {
    var week=new Array(7);
     week[0]="Sunday";
     week[1]="Monday";
     week[2]="Tuesday";
     week[3]="Wednesday";
     week[4]="Thursday";
     week[5]="Friday";
     week[6]="Saturday";

    var date=new Date();
    let today=week[date.getDay()];
    return today; 
};

const curTime=()=>{
    var date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let period="AM";
    if(hour>11){
        period="PM";
        if(hour>12){
            hour-=12;
        }
    }
    if (min < 10) {
  min = "0" + min;
}
    return `${hour}:${min} ${period}`;
};

const week_date=()=> {
    var months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    var date=new Date();
    var day=date.getDate();
    var month=months[date.getMonth()];

    return `${day} ${month}`;
};

day.innerHTML=week_day();
today_date.innerHTML=week_date();
time.innerHTML=curTime();
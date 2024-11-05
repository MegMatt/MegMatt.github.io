

function tell_fortune(child,part,geo,job){

    let fortune = "You will be a X in P, and married to Z with N kids.";

    your_fortune = fortune
    .replace('X',job)
    .replace('P',geo)
    .replace('Z',part)
    .replace('N',child);
    // your_fortune = fortune.replace('Y',geo);
    // your_fortune = fortune.replace('Z',part);
    // your_fortune = fortune.replace('N',child);

    return your_fortune;
}

function print_fortune()
{
    const fortune_1=tell_fortune(4,"Bob","Ohio","teacher");
    const fortune_2=tell_fortune(2,"Jessica","Florida","doctor")
    const fortune_3=tell_fortune(3,"Jane","Colorado","coder")

    const fortuneElements = document.querySelectorAll(".my_class");

    if (fortuneElements.length >= 3) {
        fortuneElements[0].innerHTML = fortune_1;
        fortuneElements[1].innerHTML = fortune_2;
        fortuneElements[2].innerHTML = fortune_3;
    }
}

document.getElementById("button_1").addEventListener("click", print_fortune);



const dog_age = document.getElementById('customage');

function calculate(dog_age){
    let human_years = dog_age * 7;

    return human_years;
}

function print_age()
{
    const dog_age_int=parseInt(dog_age.value);

    const new_age = calculate(dog_age_int);

    wholestory="Your dog is J years old in human years.";
    const new_story = wholestory.replace('J',new_age);
    story.textContent = new_story;
}

document.getElementById("button_2").addEventListener("click", print_age);


function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

if (!isMobile()) {
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");
    const profile = document.querySelector(".card img");
    const content = document.querySelector(".card_content");

    container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener("mouseenter", (e) => {
        card.style.transition = "none";

        content.style.transform = "translateZ(50px)";
        profile.style.transform = "translateZ(50px)";
    });

    container.addEventListener("mouseleave", (e) => {
        card.style.transition = "transform 300ms ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        content.style.transform = "translateZ(0px)";
        profile.style.transform = "translateZ(0px)";
    });
}

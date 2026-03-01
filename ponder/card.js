const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp"
};

document.querySelector(".image").setAttribute("src", character.image);
document.querySelector(".name").textContent = character.name;
document.querySelector(".stats").innerHTML = `
    <p>Class: ${character.class}</p>
    <p>Level: ${character.level}</p>
    <p>Health: ${character.health}</p>
`;
document.querySelector(".buttons button:first-child").addEventListener("click", () => {
    character.health -= 20;

       if (character.health <= 0) {
        character.health = 0;
        alert(`You died`);
    }
    document.querySelector(".stats").innerHTML = `
        <p>Class: ${character.class}</p>
        <p>Level: ${character.level}</p>
        <p>Health: ${character.health}</p>
    `;
});

document.querySelector(".buttons button:last-child").addEventListener("click", () => {
    character.level += 1;
    document.querySelector(".stats").innerHTML = `
        <p>Class: ${character.class}</p>
        <p>Level: ${character.level}</p>
        <p>Health: ${character.health}</p>
    `;
});

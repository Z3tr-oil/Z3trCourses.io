
document.addEventListener("DOMContentLoaded", function () {
    const content = document.createElement("header");
    content.innerHTML = `
        <div style="padding-top: 5px;">
        <button id="switchBtn" class="imgButton" onclick="swBtn()"><img src="/Z.png" alt="Home" width="41px" style="float: left;padding: 0px 5px;"></BUtton>
        <a href="login.html" class="page-button">login</a>
        <a href="register.html" class="page-button">register</a>

   </div>`
    document.body.appendChild(content);


});



const switchBtn = document.getElementById('switchBtn')
sidebar.classList.toggle('hidden');



function swBtn() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
};



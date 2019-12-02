(function ($) {
    const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const MAX_LENGHT = 30;

    function generate() {
        let password = "";

        for (let i = 0; i < MAX_LENGHT; i++) {
            password += pick();
        }
        return password;
    }
    function pick() {
        return CHARS[random(CHARS.length - 1)];
    }
    function random(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const clipboard = new ClipboardJS(".password");

    clipboard.on("success", function (e) {
        document.getSelection().removeAllRanges();
        console.info("Successfully copied password to your clipboard.");

        $(".password").text("Copied to clipboard");

        setTimeout(function () {//setTimeout ottaa parametrina anonyymin funktion
            $(".password").text(e.text);
        }, 3000)//setTimeout tarvitsee toisen parametrin, millisekunttia
        //jos haluaa että click toimii useamman kerran $(".password").text(generate());
    });
    $(document).ready(function () {
        $(".password").text(generate());
    });
}(jQuery))
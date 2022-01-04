function search(input) {
    window.open("Kerkimi.html");
    let keywords = [["telefon","televizion","internet","debaway","euro","cmimi"],
    ["historiku","historia","rreth nesh"],
    ["fillestare","metro","drita","bistro","max","kompania","kabllor","euro","cmimi"],
    ["karriera","pune","punesim"],
    ["ndihme","pyetje","kujdesi"]];
    let results = 'Shikoni pakot me cmimet dhe detajet e tyre tek faqja e <a href="ofertat.html">ofertave</a>';
    let finalInfo = "";
    var ofertatReg = "";
    var rrethneshReg = "";
    var konkursetReg = "";
    var faqsReg = "";

    input = toString(input);
    let ofertat = /pakoj?a?|\d+|euro/i;
    var rrethnesh = /historiku|historia|rreth\snesh/i;
    var produktet = /karriera|punes?i?m?/i;
    var faqs = /ndihme|pyetje|kujdesi?/i;
}
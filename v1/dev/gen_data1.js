var bufferString = `firstName,lastName
Abesari,Woldeyesus
Abhilash,Bhati
Ada,Bovsunovsky
Akash,Kakumani
Aleksey,Bobok
Alena,Yakimova
Alex,Wheeler
Alexander,Golob
Alexandra,Miller-Browne
Alexandrea,Mellen
Ali,Hammoud
Alice,Young
Allan,Lasser
Amanda,Stevens
Andrew,Ambrosino
Andrew,Kenney
Anna,Goncharova
Anna,Martynova
Anton,Yakobson
Arailym,Nurmasheva
Archana,Jeyaram
Ari,Vaniderstine
Artem,Losev
Arthur,Storozhenko
Asaph,Yuan
Barron,Roth
Ben,Kvisler
Bert,Shao
Berwald,Streep
Blair,Fang
Blake,Scheifele
Bowen,Lu
Brian,Fallon
Brian,Girer
Brian,Meyers
Brian,Mulyadi
Brian,Nussbaum
Brian,Shoicket
Brianna,Vieira
Calvin,Chin
Caroline,Lee
Christine,Wong
Christopher,Lee
Christopher,Woodall
Connor,Mathews
Cynthia,Chan
Cyril,Saade
Dan,Gorelick
Daniel,Andrade
Daria,Kurnygina
Darya,Tikhonova
Dennis,Cherchenko
Derek,Mei
Eddy,Luo
Emily,Feng
Enze,Yan
Eric,Hsiao
Evi,Shiakolas
Florence,Feng
Habib,Khan
Henry,Boldizsar
Hiroki,Osame
Ibrahim,Mustafayev
Igor,Dmitriev
Ivan,Uvarov
Jack,Hou
Jack,Knollmeyer
Jacqueline,Chau
James,Wu
Jessica,Li
Jie,Gong
Joanne,Zhou
John,Moore
Jordan,Pories
Jorge,Nunes
Josef,Al-Sibaie
Joseph,Cho
Junyu,Liu
Justin,Bernardo
Justin,Brezhnev
Juyong,Park
Katherine,McHugh
Kevin,Sun
Kevin,Mannix
Kevin,Smith
Konstantin,Pavlov
Kristel,Tan
Kyle,Holzinger
Kyle,Mann
Lida,Karadimou
Lucas,Medina
Luke,Sorenson
Luo,Tian-you
Ly,Phan
Marina,Ivashkevich
Matt,Auerbach
Matt,George
Matt,Miller
Matthew,Auerbach
Maxim,Secor
Michael,Golovanov
Michael,Hulet
Michael,Lau
Michael,Leo
Miguel,Valdez
Misbah,Ashraf
Mistral,Cedanio
Mostafa,Amin
Najm,Sheikh
Nathan,Bernard
Nathanael,Troyer
Navah,Hopkins
Nicholas,Morrison
Olga,Afanaseva
Oliver,Chen
Olivia,Deng
Paavan,Chopra
Paolo,Mauricio
Patrick,Crawford
Peter,Kang
Ramya,Babu
Raphael,Baysa
Rob,Mallery
Roman,Zubenko
Ryan,Whitten
Salma,Yehia
Sam,Kaardal
Sanam,Patel
Saniya,Datwani
Santiago,Beltran
Sara,Chaparro
Sawyer,Xie
Sean,Smith
Shantanu,Bobhate
Sharar,Rahman
Sierra,Lanfranco
Simon,Zeng
Sofya,Bazhanova
Sophie,Lehar
Sparsh,Kumar
Stanislava,Labetskaya
Steve,Toye
Steven,Perlman
Theodore,Darenkov
Thomas,Strissel
Timothy,Chong
Uliana,Egina
Vidit,Jain
Vivek,Kotecha
Viviana,Yee
Vladimir,Protasov
Wayne,Snyder
William,Kranich
Winston,Chen
Yanzie,Chow
Yaqian,Feng
Yeskendir,Kazhmurat`

var arr = bufferString.split('\n');    

var jsonObj = [];
var headers = arr[0].split(',');
for(var i = 1; i < arr.length; i++) {
    var data = arr[i].split(',');
    var obj = {};
    for(var j = 0; j < data.length; j++) {
        obj[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(obj);
}
console.log(JSON.stringify(jsonObj));
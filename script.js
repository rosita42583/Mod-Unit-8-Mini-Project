

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://images.wsj.net/im-286138?width=1280&size=1", "https://m.media-amazon.com/images/I/41Y53GA49KL._SY355_.jpg","http://3.bp.blogspot.com/-pksXJ_FOEtc/TantbTEuHCI/AAAAAAAAAGw/Na9Q-21qcGE/s1600/LasSindrome2.jpg"];
	let action =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx47HjdFpbPpTVnjA9a-zyirRU8hbXgn5zCm_cdY4FZzMxvo_BABh5LIOR4LwjwQ0pIbY&usqp=CAU", "https://as01.epimg.net/epik/imagenes/2019/06/03/portada/1559573314_873311_1559575720_noticia_normal_recorte1.jpg","https://sm.ign.com/ign_es/screenshot/t/top-15-heroinas-del-cine-de-accion/top-15-heroinas-del-cine-de-accion_j5an.jpg"];
let drama =["https://i0.wp.com/dramapotatoe.com/wp-content/uploads/2021/07/C-Dramas-First-Impressions-July-10-16-—-Unforgettable-Love-Summer-Again-Lover-or-Stranger-Tough-Lady-Litter-to-Glitter.jpg?fit=1024%2C682&ssl=", "_https://www.cheatsheet.com/wp-content/uploads/2021/11/Main-characters-from-Sweet-Home-on-Netflix-and-Happiness-K-drama.jpg","https://6.vikiplatform.com/image/d24af769fce54b06b409e831b7e1e432.jpeg?x=b&s=480x270&e=t&q=g"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
    for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
    }
  else if(genreInput==="action"){
 for (let show of action){
$(".shows").append("<img src="+ show+">");
    }
    }
else if(genreInput==="drama"){
for (let show of drama){
$(".shows").append("<img src="+ show+">");
  }
  }
});
$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});
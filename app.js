








    //chap  # 1 task # 1
    alert('Assalam Alaikum....')

    //task # 2
    alert(' Error! Please enter a valid password.')
    
    //task # 3
    alert(' Welcome to JS Land...... \n Happy Coding !')
    
    //task # 4
    alert(' Welcome to JS Land....') 
    alert('Happy Coding !')
    
    
     //task # 5
     alert('Hello....I can run JS through my web browser’s console')
    
    
    
    
    
    
    
      // chap  # 35 to 38 task # 1
    
      function add () {
        document.write("Addition of two numbers :")
    
        document.write(8+5)
       
       }
      add ();
    
    // chap  # 35 to 38 task # 2
    
    function mul () {
        document.write("<br><br> Multiplication of two numbers :")
    
        document.write(8*5)
       
       }
      mul ();
    
    // chap  # 35 to 38 task # 3
    
    function sum_sq(array) {
        var sum = 0,
            i = array.length;
        while (i--) {
          sum += Math.pow(array[i], 2);
        }return sum;
      }
      
      document.write("<br><br> The sum of squares : "+sum_sq([0, 1, 2, 3, 4]));
      
    
      // chap  # 35 to 38 task # 4
      
    
            function Factorial(n) { 
                var ans=1; 
                  
                for (var i = 2; i <= n; i++) 
                    ans = ans * i; 
            document.write("<br><br> Factorial of a number is " +ans) 
            } 
              
           Factorial(5);
    
    
             // chap  # 35 to 38 task # 5
    
           function getHypotenuseLength(a, b) {
            if (a && b && Number.isFinite(a) && Number.isFinite(b)) { 
                document.write("<br><br> Hypotenuse : " +Math.sqrt((a * a) + (b * b)))
            }
          
            }
    
        getHypotenuseLength(5, 12)
    
    
    
    // chap  # 35 to 38 task # 6
    
    
    function count(string) {
        var string1 = string.split("").sort().join("");
        var counter = 0;
        for (var i = 0; i < string.length; i++) {
          if (string1[i] == string[i + 1]) {
            counter++;
          } else {
            document.write("<br> " +string1[i] + " " + counter);
            counter = 0;
          }
        }
      }
      count("thequickbrownfoxjumpsoverthelazydog");
    
    
    
    
    
    
    
    
    //chap # 38 to 42 task # 1
    
    var x;
    var y;
    
    
    
    function power( x, y)
    {
        var val=2;
    
        for(var i=1;i<=y;i++)
        {
            val=val*x;
        }
        alert("Power is " +val);
    }
    
    power(3,3);
    
    //chap # 38 to 42 task # 2
    
    
    
    function leapyear(year)
    {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }
    alert(leapyear(2016));
    alert(leapyear(2000));
    alert(leapyear(1700));
    alert(leapyear(1800));
    alert(leapyear(100));
    
    
    
    //chap # 38 to 42 task # 3
    
    var side1 = 5; 
    var side2 = 6; 
    var side3 = 7; 
    var s = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    alert("The Area of  the triangle is "+area);
    
    
    //chap # 38 to 42 task # 4
    
    var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    
    var searchTerm = 'dog';
    var indexOfFirst = paragraph.indexOf(searchTerm);
    
    alert(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    
    alert(`The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    
    
    
    
    //chap # 38 to 42 task # 5
    
    var string = "A paragraph can be as short as a word or as long as 250 words or more. It may consist of just one sentence or many sentences. The literary essay may be composed of long paragraphs. J.C. Tressler and Claude E. Lewis say that the average length of a paragraph is 100 to 150 words for ordinary writing; about 60 for business letters; and about 75 for newspaper reports ";
    var vowel = ["a", "e", "i", "o", "u"];
    
    String.prototype.character = function name() {
        var i;
        for ( i = 0; i < vowel.length; i++) {
            var secondLoop = string.length;
            for (var j = 0; j < secondLoop; j++) {
                if (vowel[i] == string.charAt(j)) {
                    string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                }
    
            }
        }
    }
    
    string.character();
    alert(string);
    
    //chap # 38 to 42 task # 6
    
    function findOccurrences() {
        var str = "Pleases read this application and give me gratuity";
    
        var count = 0;
        var haveSeenVowel = false;
      
        for (var letter of str.toLowerCase()) {
          switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              {
                if (haveSeenVowel) {
                  count++;
                  haveSeenVowel = false;
                } else {
                  haveSeenVowel = true;
                }
                break;
              }
            default:
              haveSeenVowel = false
          }
        }
      
        return count
      }
    alert("The occurences of  any two vowels in succession in a line of text is  " +findOccurrences());
    
    //chap # 38 to 42 task # 7
    
    var km=67;
    
       var  m = km * 1000;
        var cm = km * 1000 * 100;
        var f = km * 3280.84;
        var inch = km * 39370.08;
        alert("The distance in Feet : " + f);
        alert("The distance in Inches : " + inch);
        alert("The distance in Meters : " + m);
        alert("The distance in Centimeters : " + cm);
    
    
        //chap # 38 to 42 task # 8
    
        
        function get_salary() {
        
        var hours = prompt("Please enter the number of hours you worked this week");
        var rate = prompt("Please enter how much money you earn per hour");
        
        if (hours>= 40)
        
        {
        regpay = (rate * 40)
        overtimepay = ((rate * 1.5) * (hours - 40))
        pay = (regpay + overtimepay)
        
        alert ("You earned overtime this week! Your total pay is " + pay);
        
        }
        
        else 
        {
        regpay = (rate * hours)
        overtimepay = 0.00
        
        alert ("Your total pay is " + regpay);
        }
    
    }
    get_salary();
    
    
    
    
    
    
     //chap # 43 to 48 task # 4
    
    var buttonTarget = document.getElementsByClassName("btn");
    var counter = 0;
    
    function incrementer(){
      buttonTarget.innerHTML = counter.toString();
      counter++;
      alert(counter)
    }
    
    var buttonTarget = document.getElementsByClassName("btn");
    var counter = 10;
    
    function decrementer(){
      buttonTarget.innerHTML = counter.toString();
      counter--;
      alert(counter)
    }
    
        
    //chap # 49 to 52 task # 2
    
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    
    
    
    
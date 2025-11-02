import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMediaQuery } from "react-responsive";
import ThisDayHomeButton from "../../components/ThisDayHomeButton";
import CatsHomeButton from "../../components/CatsHomeButton";
import DadHomeButton from "../../components/DadHomeButton";
import InspirationHomeButton from "../../components/InpirationHomeButton";
import AboutButton from "../../components/AboutButton";

const HomeScreen = () => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const tallerPhone = useMediaQuery({ minWidth: 410 });

  // Fallback quotes in case API fails or is slow
  const fallbackQuotes = [
    { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
    { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
    { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill" },
    { q: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt" },
    { q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius" },
    { q: "Everything you've ever wanted is on the other side of fear.", a: "George Addair" },
    { q: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", a: "Roy T. Bennett" },
    { q: "I learned that courage was not the absence of fear, but the triumph over it.", a: "Nelson Mandela" },
    { q: "The only impossible journey is the one you never begin.", a: "Tony Robbins" },
    { q: "Your limitation—it's only your imagination.", a: "Unknown" },
    { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson" },
    { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
    { q: "What you get by achieving your goals is not as important as what you become by achieving your goals.", a: "Zig Ziglar" },
    { q: "Act as if what you do makes a difference. It does.", a: "William James" },
    { q: "Success is not how high you have climbed, but how you make a positive difference to the world.", a: "Roy T. Bennett" },
    { q: "Keep your face always toward the sunshine—and shadows will fall behind you.", a: "Walt Whitman" },
    { q: "The only limit to our realization of tomorrow will be our doubts of today.", a: "Franklin D. Roosevelt" },
    { q: "Do not go where the path may lead, go instead where there is no path and leave a trail.", a: "Ralph Waldo Emerson" },
    { q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", a: "Ralph Waldo Emerson" },
    { q: "The best time to plant a tree was 20 years ago. The second best time is now.", a: "Chinese Proverb" },
    { q: "An unexamined life is not worth living.", a: "Socrates" },
    { q: "Eighty percent of success is showing up.", a: "Woody Allen" },
    { q: "Your time is limited, don't waste it living someone else's life.", a: "Steve Jobs" },
    { q: "Winning isn't everything, but wanting to win is.", a: "Vince Lombardi" },
    { q: "I am not a product of my circumstances. I am a product of my decisions.", a: "Stephen Covey" },
    { q: "Every child is an artist. The problem is how to remain an artist once he grows up.", a: "Pablo Picasso" },
    { q: "You can never cross the ocean until you have the courage to lose sight of the shore.", a: "Christopher Columbus" },
    { q: "Either you run the day, or the day runs you.", a: "Jim Rohn" },
    { q: "Whether you think you can or you think you can't, you're right.", a: "Henry Ford" },
    { q: "The two most important days in your life are the day you are born and the day you find out why.", a: "Mark Twain" },
    { q: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", a: "Johann Wolfgang von Goethe" },
    { q: "The best revenge is massive success.", a: "Frank Sinatra" },
    { q: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.", a: "Zig Ziglar" },
    { q: "Life shrinks or expands in proportion to one's courage.", a: "Anais Nin" },
    { q: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", a: "Vincent Van Gogh" },
    { q: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", a: "Aristotle" },
    { q: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", a: "Jesus" },
    { q: "The only person you are destined to become is the person you decide to be.", a: "Ralph Waldo Emerson" },
    { q: "Go confidently in the direction of your dreams. Live the life you have imagined.", a: "Henry David Thoreau" },
    { q: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", a: "Erma Bombeck" },
    { q: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", a: "Booker T. Washington" },
    { q: "Certain things catch your eye, but pursue only those that capture the heart.", a: "Ancient Indian Proverb" },
    { q: "Everything has beauty, but not everyone can see.", a: "Confucius" },
    { q: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", a: "Anne Frank" },
    { q: "When I let go of what I am, I become what I might be.", a: "Lao Tzu" },
    { q: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", a: "Maya Angelou" },
    { q: "Happiness is not something readymade. It comes from your own actions.", a: "Dalai Lama" },
    { q: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", a: "Sheryl Sandberg" },
    { q: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", a: "Aristotle" },
    { q: "If the wind will not serve, take to the oars.", a: "Latin Proverb" },
    { q: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.", a: "Unknown" },
    { q: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", a: "Marie Curie" },
    { q: "Too many of us are not living our dreams because we are living our fears.", a: "Les Brown" },
    { q: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", a: "Joshua J. Marine" },
    { q: "If you want to lift yourself up, lift up someone else.", a: "Booker T. Washington" },
    { q: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", a: "Leonardo da Vinci" },
    { q: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", a: "Jamie Paolinetti" },
    { q: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", a: "Erica Jong" },
    { q: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", a: "Bob Dylan" },
    { q: "I didn't fail the test. I just found 100 ways to do it wrong.", a: "Benjamin Franklin" }
  ];

  useEffect(() => {
    fetchApiCall();
  }, []);

  const getRandomFallbackQuote = () => {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    setQuote(randomQuote.q);
    setAuthor(randomQuote.a);
  };

  const fetchApiCall = () => {
    const timeoutId = setTimeout(() => {
      // If API takes longer than 3 seconds, use fallback quote
      getRandomFallbackQuote();
    }, 3000);

    fetch("https://zenquotes.io/api/random", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        clearTimeout(timeoutId);
        if (response && response[0] && response[0].q) {
          // Check if response is "Too many requests" error
          if (response[0].q.substring(0, 17) === "Too many requests" || !response[0].q) {
            getRandomFallbackQuote();
          } else {
            setQuote(response[0].q);
            setAuthor(response[0].a);
          }
        } else {
          getRandomFallbackQuote();
        }
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        // console.log(err);
        getRandomFallbackQuote();
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to Happy Space</Text>
      </View>

      {tallerPhone ? (
        <View style={styles.aboutButtonTaller}>
          <Pressable>
            <AboutButton />
          </Pressable>
        </View>
      ) : (
        <View style={[styles.aboutButtonSmaller]}>
          <AboutButton />
        </View>
      )}

      {tallerPhone ? (
        <View style={styles.widerContainer}>
          <View style={styles.quotesLarger}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>

          <View style={styles.catsSmallerContainer}>
            <CatsHomeButton screenName={"Advice From Cats"} />
          </View>

          <View style={styles.historyShorterContainer}>
            <ThisDayHomeButton screenName={"This Day in History"} />
          </View>
          <View style={styles.DadShorterContainer}>
            <DadHomeButton screenName={"Dad Jokes"} />
          </View>
          <View style={styles.InspirationShorterContainer}>
            <InspirationHomeButton screenName={"Bored"} />
          </View>
        </View>
      ) : (
        <View style={styles.shorterContainer}>
          <View style={styles.quotesSmaller}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>

          <View style={styles.catsSmallerContainer}>
            <CatsHomeButton screenName={"Advice From Cats"} />
          </View>

          <View style={styles.historyShorterContainer}>
            <ThisDayHomeButton screenName={"This Day in History"} />
          </View>
          <View style={styles.DadShorterContainer}>
            <DadHomeButton screenName={"Dad Jokes"} />
          </View>
          <View style={styles.InspirationShorterContainer}>
            <InspirationHomeButton screenName={"Bored"} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A6D9F7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  aboutButtonTaller: {
    position: "absolute",
    bottom: "5%",
    zIndex: 999,
  },
  aboutButtonSmaller: {
    position: "absolute",
    bottom: "5%",
    zIndex: 999,
  },
  titleView: {
    backgroundColor: "#312F2F",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1.9,
    shadowRadius: 8,
  },
  title: {
    color: "#A6D9F7",
    fontSize: 25,
    // fontFamily: "Baskerville-SemiBold",
    position: "relative",
    top: "20%",
  },
  quotes: {
    position: "absolute",
    top: "35%",
  },
  quote: {
    fontSize: 20,
    paddingLeft: "20",
    paddingRight: "20",
     paddingBottom: "10",
  },
  author: {
    color: "grey",
    textAlign: "center",
  },

  shorterContainer: {
    flex: 1,
    alignItems: "center",
  },
  quotesSmaller: {
    position: "absolute",
    top: "15%",
    paddingLeft: 10,
    paddingRight: 10,
  },

  catsSmallerContainer: {
    position: "relative",
    top: 290,
    right: 100,
  },
  historyShorterContainer: {
    position: "relative",
    top: 140,
    right: -100,
  },
  DadShorterContainer: {
    position: "relative",
    top: 180,
    right: 100,
  },
  InspirationShorterContainer: {
    position: "relative",
    top: 30,
    right: -100,
  },
  widerContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: 50,
  },
  quotesLarger: {
    position: "absolute",
    top: "10%",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HomeScreen;

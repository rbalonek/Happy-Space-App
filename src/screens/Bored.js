import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Bored() {
  let [idea, setIdea] = useState("");

  // Curated activities by category - 100+ per category
  const fallbackActivities = {
    recreational: [
      "Go for a walk in the park", "Learn a new card game", "Start a garden", "Reorganize your living space",
      "Try a new recipe for dinner", "Play a board game", "Go stargazing", "Create a scrapbook",
      "Take up photography", "Build a birdhouse", "Learn to juggle", "Start origami",
      "Paint or draw something", "Learn magic tricks", "Fly a kite", "Build a puzzle",
      "Learn to play chess", "Try geocaching", "Start a coin collection", "Learn calligraphy",
      "Make homemade candles", "Try woodworking", "Learn pottery", "Start bird watching",
      "Create a vision board", "Learn to knit or crochet", "Build a terrarium", "Try rock painting",
      "Learn flower arranging", "Make soap from scratch", "Try letterboxing", "Learn skateboarding",
      "Start a stamp collection", "Try disc golf", "Learn archery", "Build model airplanes",
      "Try making sushi", "Learn card tricks", "Start a herb garden", "Try brewing beer or kombucha",
      "Make homemade pasta", "Learn to play ukulele", "Try kite surfing", "Build a fort",
      "Learn yo-yo tricks", "Try rock climbing", "Start scrapbooking", "Learn coin tricks",
      "Try making pottery", "Build a model train set", "Learn to rollerblade", "Try paddleboarding",
      "Make homemade pizza", "Learn harmonica", "Try kayaking", "Build a miniature garden",
      "Learn card flourishes", "Try making cheese", "Start a recipe book", "Learn pen spinning",
      "Try making wine", "Build a Lego creation", "Learn skateboard tricks", "Try soap carving",
      "Make homemade ice cream", "Learn to whistle songs", "Try slacklining", "Build a fairy garden",
      "Learn cup stacking", "Try making jam", "Start a plant journal", "Learn contact juggling",
      "Try making pickles", "Build a sandcastle", "Learn pen tricks", "Try making bread",
      "Make friendship bracelets", "Learn to beatbox", "Try frisbee golf", "Build a snowman",
      "Learn paper airplane tricks", "Try making salsa", "Start a dream journal", "Learn fire poi",
      "Try making kimchi", "Build a card house", "Learn balloon animals", "Try making tempura",
      "Make wind chimes", "Learn to moonwalk", "Try urban exploration", "Build domino chains",
      "Learn sleight of hand", "Try making ramen", "Start a gratitude journal", "Learn hula hooping",
      "Try making dumplings", "Build a blanket fort", "Learn coin rolling", "Try making tacos"
    ],
    social: [
      "Call a friend you haven't talked to", "Organize a game night", "Join a local club", "Volunteer at a charity",
      "Host a potluck dinner", "Start a book club", "Attend a local event", "Write letters to loved ones",
      "Plan a surprise party", "Join a sports team", "Organize a picnic", "Start a supper club",
      "Host a movie marathon", "Join a choir or band", "Organize a beach cleanup", "Start a walking group",
      "Host a craft night", "Join a dance class", "Organize a clothing swap", "Start a running club",
      "Host a wine tasting", "Join a meetup group", "Organize a charity event", "Start a gaming group",
      "Host a karaoke night", "Join a language exchange", "Organize a neighborhood BBQ", "Start a hiking club",
      "Host a trivia night", "Join a volunteer org", "Organize a park cleanup", "Start a photography club",
      "Host a cooking competition", "Join a theater group", "Organize a food drive", "Start a makers group",
      "Host a paint and sip", "Join a gardening club", "Organize a talent show", "Start a cycling group",
      "Host a murder mystery", "Join a writing group", "Organize a bake sale", "Start a chess club",
      "Host a bonfire night", "Join a debate club", "Organize a car wash fundraiser", "Start a coding club",
      "Host a brunch", "Join a travel group", "Organize a community garden", "Start a pottery class",
      "Host a tea party", "Join a fitness class", "Organize a toy drive", "Start a knitting circle",
      "Host a dinner party", "Join a photography walk", "Organize a river cleanup", "Start a study group",
      "Host a cocktail party", "Join a bird watching group", "Organize a blood drive", "Start a poetry group",
      "Host a BBQ", "Join a yoga class", "Organize a clothes donation", "Start a film club",
      "Host a house party", "Join a rock climbing gym", "Organize a soup kitchen shift", "Start a music jam",
      "Host a costume party", "Join a cycling club", "Organize a pet adoption event", "Start a maker space",
      "Host a themed dinner", "Join a swimming club", "Organize a tree planting", "Start a D&D campaign",
      "Host a pool party", "Join a martial arts class", "Organize a senior visit", "Start a anime club",
      "Host a garden party", "Join a sailing club", "Organize a hospital visit", "Start a video game night",
      "Host a breakfast club", "Join a rowing team", "Organize a mentorship program", "Start a puzzle group",
      "Host a coffee morning", "Join a tennis club", "Organize a literacy program", "Start a board game cafe",
      "Host a dessert party", "Join a golf group", "Organize a meals on wheels", "Start a escape room team"
    ],
    education: [
      "Learn a new language", "Watch a documentary", "Read about history", "Take an online course",
      "Learn to code basics", "Study constellations", "Research family history", "Learn about a culture",
      "Read a classic novel", "Study philosophy", "Learn music theory", "Study art history",
      "Read scientific papers", "Study world religions", "Learn mathematics", "Study psychology",
      "Read poetry", "Study economics", "Learn astronomy basics", "Study anatomy",
      "Read biographies", "Study political science", "Learn chemistry", "Study architecture",
      "Read mythology", "Study sociology", "Learn physics", "Study anthropology",
      "Read short stories", "Study linguistics", "Learn biology", "Study archaeology",
      "Read non-fiction", "Study geography", "Learn geology", "Study paleontology",
      "Read essays", "Study literature", "Learn meteorology", "Study oceanography",
      "Read memoirs", "Study mythology", "Learn botany", "Study zoology",
      "Read historical fiction", "Study criminology", "Learn statistics", "Study ecology",
      "Read science fiction", "Study law basics", "Learn logic", "Study genetics",
      "Read plays", "Study ethics", "Learn calculus", "Study neuroscience",
      "Read graphic novels", "Study rhetoric", "Learn algebra", "Study biochemistry",
      "Read self-help books", "Study debate", "Learn geometry", "Study microbiology",
      "Read business books", "Study journalism", "Learn trigonometry", "Study virology",
      "Read technology books", "Study marketing", "Learn computer science", "Study immunology",
      "Read cookbooks", "Study advertising", "Learn data science", "Study pharmacology",
      "Read travel guides", "Study public speaking", "Learn AI basics", "Study physiology",
      "Read gardening books", "Study critical thinking", "Learn machine learning", "Study pathology",
      "Read DIY guides", "Study logical fallacies", "Learn quantum physics", "Study epidemiology",
      "Read photography books", "Study ancient history", "Learn relativity", "Study cardiology",
      "Read art books", "Study medieval history", "Learn thermodynamics", "Study orthopedics",
      "Read music books", "Study modern history", "Learn mechanics", "Study radiology",
      "Read film theory", "Study renaissance", "Learn optics", "Study oncology"
    ],
    relaxation: [
      "Practice deep breathing", "Take a long bath", "Do gentle yoga", "Listen to calming music",
      "Meditate for 10 minutes", "Draw or doodle", "Watch the sunset", "Make a cup of tea",
      "Practice mindfulness", "Get a massage", "Do progressive relaxation", "Listen to nature sounds",
      "Practice tai chi", "Take a nap", "Do guided imagery", "Listen to white noise",
      "Practice qigong", "Soak your feet", "Do body scanning", "Listen to rain sounds",
      "Practice stretching", "Light aromatherapy candles", "Do restorative yoga", "Listen to ocean waves",
      "Practice pilates", "Use a heating pad", "Do yin yoga", "Listen to forest sounds",
      "Practice walking meditation", "Take a steam shower", "Do chair yoga", "Listen to ASMR",
      "Practice visualization", "Use essential oils", "Do gentle stretches", "Listen to binaural beats",
      "Practice journaling", "Take a sauna", "Do breathing exercises", "Listen to theta waves",
      "Practice gratitude", "Use a foam roller", "Do meditation walks", "Listen to chimes",
      "Practice positive affirmations", "Get acupuncture", "Do floating meditation", "Listen to piano music",
      "Practice self-massage", "Use a weighted blanket", "Do bedtime yoga", "Listen to guitar music",
      "Practice coloring", "Take a nature bath", "Do sunset yoga", "Listen to harp music",
      "Practice reading fiction", "Use a massage chair", "Do morning stretches", "Listen to flute music",
      "Practice watching clouds", "Take a mineral bath", "Do evening meditation", "Listen to singing bowls",
      "Practice gardening therapy", "Use heat therapy", "Do laughter yoga", "Listen to Celtic music",
      "Practice forest bathing", "Take an Epsom salt bath", "Do sound bath", "Listen to spa music",
      "Practice pet therapy", "Use cold therapy", "Do crystal meditation", "Listen to ambient music",
      "Practice aromatherapy", "Take a milk bath", "Do candle meditation", "Listen to jazz",
      "Practice listening to podcasts", "Use compression therapy", "Do water meditation", "Listen to classical",
      "Practice cloud watching", "Take a bubble bath", "Do art therapy", "Listen to new age music",
      "Practice stargazing", "Use infrared therapy", "Do music therapy", "Listen to lofi beats",
      "Practice slow walking", "Take a hot spring bath", "Do mandala coloring", "Listen to nature meditation",
      "Practice gentle swimming", "Use a neck massager", "Do zentangle", "Listen to chakra tones"
    ]
  };

  const getRandomActivity = (category) => {
    const activities = fallbackActivities[category];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    setIdea(randomActivity);
  };

  const fetchApiCallRecreational = () => getRandomActivity("recreational");
  const fetchApiCallSocial = () => getRandomActivity("social");
  const fetchApiCallEducational = () => getRandomActivity("education");
  const fetchApiCallRelaxation = () => getRandomActivity("relaxation");

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/aqua-d9b59c89.png")}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={fetchApiCallRecreational} style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Recreational</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchApiCallSocial} style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Social</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={fetchApiCallEducational} style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Educational</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchApiCallRelaxation} style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Relaxation</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />

      {idea ? (
        <Animatable.View
          style={styles.ideaContainer}
          animation="fadeInUp"
          duration={600}
          key={idea}
        >
          <Text style={styles.idea}>"{idea}"</Text>
        </Animatable.View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4787e2",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    height: "25%",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
  },
  buttonRow: {
    flexDirection: "row",
    height: "50%",
  },
  buttonWrapper: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  button: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  ideaContainer: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "green",
    position: "absolute",
    top: "15%",
    padding: 25,
    borderRadius: 10,
    maxHeight: "50%",
    width: "85%",
    borderBottomWidth: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  idea: {
    zIndex: 999,
    fontSize: 22,
    color: "white",
    padding: 10,
    textAlign: "center",
  },
  img: {
    zIndex: -1,
    height: "150%",
    width: "100%",
  },
});

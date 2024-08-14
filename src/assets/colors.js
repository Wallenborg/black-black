const colors = [
  {
    colorCode: "#000000",
    name: "Black",
    text: "Black, is the darkest of all colors, entirely achromatic and absorbing all light. Black is one of the oldest pigments ever used in art, used on the walls in the Lascaux Cave in France.",
  },
  {
    colorCode: "#171717",
    name: "Charcoal Gray",
    text: "Charcoal Gray is a dark, muted gray with a touch of warmth, resembling the color of burned wood or charcoal. It's often used to create a sophisticated, subdued atmosphere.",
  },
  {
    colorCode: "#0C0C0C",
    name: "Oil Black",
    text: "Oil Black is a deep, rich black with subtle brown undertones, mimicking the color of crude oil. It conveys a sense of depth and luxury.",
  },
  {
    colorCode: "#0B1215",
    name: "Obsidian",
    text: "Obsidian is a dark, glassy black color inspired by the volcanic rock of the same name. It has a sleek, almost reflective quality, often associated with sharpness and clarity.",
  },
  {
    colorCode: "#101720",
    name: "Midnight Blue",
    text: "Midnight Blue is a deep, dark blue with a hint of black, evoking the color of the night sky. It's often used to create a calm, serene atmosphere.",
  },
  {
    colorCode: "#0D1717",
    name: "Dark Slate Gray",
    text: "Dark Slate Gray is a dark, muted gray with greenish undertones, resembling the color of slate rock. It's a versatile neutral that adds a touch of sophistication.",
  },
  {
    colorCode: "#020D19",
    name: "Rich Black",
    text: "Rich Black is a deep, saturated black with a slight blue tint, giving it a velvety, luxurious appearance. It's often used for bold, dramatic designs.",
  },
  {
    colorCode: "#011222",
    name: "Deep Navy Blue",
    text: "Deep Navy Blue is a very dark shade of blue, bordering on black. It exudes a sense of authority and professionalism, making it popular in corporate designs.",
  },
  {
    colorCode: "#343434",
    name: "Jet Black",
    text: "Jet black is a low-saturation shade of black, one of the few shades of black made with equal parts red, green, and blue in the RGB color system. The color takes its name from the gemstone, which is actually a type of coal.",
  },
  {
    colorCode: "#1B1212",
    name: "Licorice",
    text: "Licorice is a shade of black, and has a relatively high red value in the RGB color system. The color takes its name from the soft, chewy candy, which is flavored with extracts from the root of the licorice plant.",
  },
  {
    colorCode: "#28282B",
    name: "Matte Black",
    text: "Matte black is an unsaturated shade of black low in brightness and non-reflective or shiny. Matte black is growing in popularity.",
  },
  {
    colorCode: "#353935",
    name: "Onyx",
    text: "Onyx is a shade of greenish-black, a modern interpretation of a color that has been in use since ancient Egypt. Onyx gets its name from the gemstone, which also comes in shades of red and green.",
  },
  {
    colorCode: "#0A0A0A",
    name: "Ebony",
    text: "Ebony is a deep, dark black with brown undertones, inspired by the dense, heavy wood of the ebony tree. It's associated with luxury and exclusivity.",
  },
  {
    colorCode: "#1C1C1C",
    name: "Carbon Black",
    text: "Carbon Black is a pure, intense black, often used in industrial and automotive design. It's named after the carbon powder used in various manufacturing processes.",
  },
  {
    colorCode: "#2C2C2C",
    name: "Graphite",
    text: "Graphite is a dark gray with a metallic sheen, reminiscent of the graphite used in pencils. It's a sophisticated color often used in modern, minimalistic designs.",
  },
  {
    colorCode: "#050505",
    name: "Raven",
    text: "Raven is a deep, intense black with a subtle blue undertone, inspired by the glossy feathers of a raven. It evokes mystery and elegance.",
  },
  {
    colorCode: "#2A3439",
    name: "Gunmetal",
    text: "Gunmetal is a dark gray-black with a metallic finish, often associated with firearms and machinery. It adds a rugged, industrial feel to designs.",
  },
  {
    colorCode: "#0D0D0D",
    name: "VantaBlack",
    text: "VantaBlack is the blackest black, absorbing almost all light that hits it. It's used in artistic and scientific applications to create a sense of depth and void.",
  },
  {
    colorCode: "#111111",
    name: "Pitch Black",
    text: "Pitch Black is an intense, deep black with no reflective properties, resembling the darkness of a moonless night. It's often used to create dramatic, high-contrast visuals.",
  },
  {
    colorCode: "#2D383A",
    name: "Outer Space",
    text: "Outer Space is a dark, muted blue-gray, inspired by the vastness of the universe. It brings a sense of calm and mystery to designs.",
  },
  {
    colorCode: "#3B3B3B",
    name: "Charcoal",
    text: "Charcoal is a dark gray shade, often associated with charcoal briquettes. It represents a neutral tone that is versatile in design.",
  },
  {
    colorCode: "#3B3C36",
    name: "Black Olive",
    text: "Black Olive is a dark, muted shade of black with a hint of green, resembling the color of black olives.",
  },
  {
    colorCode: "#333333",
    name: "Dark Charcoal",
    text: "Dark Charcoal is a rich, deep gray that borders on black, providing a strong neutral tone for various applications.",
  },
  {
    colorCode: "#100C08",
    name: "Smoky Black",
    text: "Smoky Black is a very dark, smoky brown-black, evoking the look of charred wood or smoke residue.",
  },
  {
    colorCode: "#242124",
    name: "Raisin Black",
    text: "Raisin Black is a dark purple-black, resembling the deep color of raisins.",
  },
  {
    colorCode: "#484848",
    name: "Taupe Black",
    text: "Taupe Black is a medium-dark grayish-brown-black, offering a neutral yet warm tone.",
  },
  {
    colorCode: "#282C34",
    name: "Deep Space",
    text: "Deep Space is a dark, almost black-blue shade, representing the vastness of space.",
  },
  {
    colorCode: "#34333C",
    name: "Eclipse",
    text: "Eclipse is a dark, muted shade of black with a hint of blue, reminiscent of the shadow of an eclipse.",
  },
  {
    colorCode: "#2B2E2C",
    name: "Ash Gray",
    text: "Ash Gray is a dark gray with subtle green undertones, inspired by the color of ash after a fire.",
  },
  {
    colorCode: "#26252B",
    name: "Steel Gray",
    text: "Steel Gray is a dark, cool-toned gray, resembling the color of steel.",
  },
  {
    colorCode: "#1E1B18",
    name: "Caviar",
    text: "Caviar is a rich, dark black with a hint of brown, inspired by the color of black caviar.",
  },
  {
    colorCode: "#20232A",
    name: "Jet Gray",
    text: "Jet Gray is a dark gray-black, blending the depth of black with the neutrality of gray.",
  },
  {
    colorCode: "#1C1E24",
    name: "Phantom Black",
    text: "Phantom Black is a deep, dark shade of black with a blue undertone, evoking a mysterious and elusive quality.",
  },
  {
    colorCode: "#0B0C10",
    name: "Black Sapphire",
    text: "Black Sapphire is a very dark blue-black, inspired by the deep, rich color of black sapphire gemstones.",
  },
  {
    colorCode: "#4A4B4D",
    name: "Stormcloud",
    text: "Stormcloud is a dark gray with subtle blue undertones, reminiscent of a stormy sky.",
  },
  {
    colorCode: "#555555",
    name: "Davy's Gray",
    text: "Davy's Gray is a dark gray with a hint of green, named after the British artist who popularized the color.",
  },
  {
    colorCode: "#2E2E2E",
    name: "Shadow",
    text: "Shadow is a medium-dark shade of gray, representing the color of shadows cast in dim light.",
  },
];

export default colors;

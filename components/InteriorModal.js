import React from "react";
import Image from "next/image";
import quots from "../public/quots.svg";
import AutoSlider from "./AutoSlider";
export default function InteriorModal() {
  const officeData = [
    {
      title: "Tadese Flatsea PLC",
      description: [
        `The client company is involved in the import and distribution of medical and sanitary supplies. The idea of the space is to incorporate the company’s brand colors with white, earth tones, and greenery in a modern and dynamic way. `,
        `Creating a cool fun environment mixing in bold brand colors that make the space more unique. The brand colors are placed on the furniture and a little bit on the reception desk. `,
        `The bold colors of the brand are balanced by the neutral oak color and the greenery on the reception background wall. `,
        `The space divider between the reception/waiting area and the workstation is made using woven strings with a long box planter made of wood. This avoids totally blocking off the space but divides it visually which creates continuity between the spaces whilst still separating the spaces physically. `,
        `The triangular shapes on the partition walls are finished in bold brand colors (yellow and dark blue) to add a dynamic and playful touch to the space.   `,
        `The conference room is designed with a warm oak texture with black and white colored triangular shapes. This blends a cozy feeling with bold and dynamic design concepts. The reflective mirrors at the top of the space reflect more light and create the illusion of continuity larger space. `,
      ],
      image: [
        "/Portfolio/Interior/Office/1/1.webp",
        "/Portfolio/Interior/Office/1/2.webp",
        "/Portfolio/Interior/Office/1/3.webp",
        "/Portfolio/Interior/Office/1/4.webp",
        "/Portfolio/Interior/Office/1/5.webp",
        "/Portfolio/Interior/Office/1/6.webp",
        "/Portfolio/Interior/Office/1/7.webp",
        "/Portfolio/Interior/Office/1/8.webp",
      ],
    },
    {
      title: "SUWEYS ",
      description: [
        `The client came to us to design their 400m2 space which had a ground and a mezzanine level. The ground level is a showroom for TVS three-wheelers and had a large storefront glass wall. The mezzanine level was intended as an office space for the company. `,
        ` The showroom design had to follow the TVS company showroom design manual which gave a general guide on the color of furniture and the overall look of the showroom. But the manual lacked a detailed design and creativity so we added some ideas to it to enhance the design and create an elegant space.  `,
        `We wanted to showcase the product (three-wheeler) in a very bold and graceful manner so we came up with a modern lighting design as well as a custom display stage. These stages make the products visible in a unique way to people passing by. `,
        `For the office, we tried to merge a slick modern design with a warm cozy environment. The office area contains a reception/waiting area, a meeting room, a work pool, a vice manager’s office, and a CEO’s office.`,
        ` The space incorporates a variety of white finishes, and warm wood tones creating a space that feels comfortable along with reflective mirrors. `,
        `The design embodies simplicity and modernity starting from the reception area. The reception desk is custom made and its white and wood finish and its slick and dynamic form create a modern feel to the space. The dynamic pattern on the background wall made using various-sized louvers ties together with the dynamic design of the desk but introduces a warm cozy touch. `,
        ` The conference room wall is decorated using different-sized and colored triangle wood panels accented by reflective mirrors and it’s all illuminated by using a modern LED light. This creates an illusion of depth in the space. `,
        `The CEO’s office screams elegance from the carpet tiles to the wall cladding and the modern furniture. The office also has a direct view of the showroom from the frameless window. The two shelves on either side of the working desk create a sense of balance and symmetry in the space. `,
        `The stair leading from the showroom to the office is made with a single metal stringer and Swedish pine landings. The stair is light airy and fresh to look at and doesn’t weigh heavy as most stairs do. `,
      ],
      image: [
        "/Portfolio/Interior/Office/2/1.jpg",
        "/Portfolio/Interior/Office/2/2.jpg",
        "/Portfolio/Interior/Office/2/3.jpg",
        "/Portfolio/Interior/Office/2/4.jpg",
        "/Portfolio/Interior/Office/2/5.jpg",
        "/Portfolio/Interior/Office/2/6.jpg",
        "/Portfolio/Interior/Office/2/7.jpg",
        "/Portfolio/Interior/Office/2/8.jpg",
        "/Portfolio/Interior/Office/2/9.jpg",
        "/Portfolio/Interior/Office/2/10.jpg",
        "/Portfolio/Interior/Office/2/11.jpg",
        "/Portfolio/Interior/Office/2/12.jpg",
        "/Portfolio/Interior/Office/2/13.jpg",
        "/Portfolio/Interior/Office/2/14.jpg",
        "/Portfolio/Interior/Office/2/15.jpg",
        "/Portfolio/Interior/Office/2/16.jpg",
        "/Portfolio/Interior/Office/2/17.jpg",
      ],
    },
    {
      title: "OWDA (Organization for welfare development in action)",
      description: [
        `
The office was on an old 60-year-old building and there were structural and bureaucratic limits to how much freedom we had in renovating it. We were able to come up with a very modern clean and efficient design that is within the limitations but still elegant.
`,
        `One of the main requirements of the clients was plenty of storage for documents. That was achieved through the creation of wall-to-wall shelving; which creates the illusion of a wall but the open and closed shelving design creates a modern and elegant look.  `,
        `Brand representation is another key element of the design as shown on the reception area design. The rich green color had to be used only in specific details and amounts to prevent it from dominating the entire project. `,
        `The wall cladding reflected the modern look through the use of shiny UV marble sheets which were countered by warm oak textured louvers. Strips of reflective mirrors that go from floor to ceiling are used to create the illusion of a wider space. `,
      ],
      image: [
        "/Portfolio/Interior/Office/3/1.webp",
        "/Portfolio/Interior/Office/3/2.webp",
        "/Portfolio/Interior/Office/3/3.webp",
        "/Portfolio/Interior/Office/3/4.webp",
        "/Portfolio/Interior/Office/3/5.webp",

        "/Portfolio/Interior/Office/3/7.webp",
        "/Portfolio/Interior/Office/3/8.webp",
        "/Portfolio/Interior/Office/3/9.webp",
        "/Portfolio/Interior/Office/3/12.webp",
        "/Portfolio/Interior/Office/3/13.webp",
      ],
    },
    {
      title: "AIE",
      description: [
        `A modern conference room that can host up to 30 people `,
        `The space was first dark and old with a worn out furniture. The design `,
        `The colors used are different shades of white with warm toned timber used. The carpet tiles used are 3 different shades of gray and the pattern is playful but not chaotic.  The walls are painted white to widen the space. `,
        `The ceiling has a false gypsum ceiling with led strip lights and wooden louvers directly above the area where the table is put. A 3m long custom light is placed right above the table to illuminate the area. A decorative mirrored wall is placed on the wall around the door to create an illusion of depth and more space. `,
      ],
      image: [
        "/Portfolio/Interior/Office/4/1.jpg",
        "/Portfolio/Interior/Office/4/2.jpg",
        "/Portfolio/Interior/Office/4/3.jpg",
        "/Portfolio/Interior/Office/4/4.jpg",
        "/Portfolio/Interior/Office/4/5.jpg",
      ],
    },
    {
      title: "Mite ",
      description: [
        `A mix of modern and industrial concepts is used. The bright red color is tastefully used on the counters used for cashiers and also storekeepers. The bold design of the counter is inspired by car spare parts and it is reflected in the intrusion and extrusion. `,
        `The mesh ceiling along the counters gives the space a raw dark quality to the space. The florescent lights above the mesh create a shadow of the mesh in the space.`,
        `A bright red and white shelf is used as a background for the CEO’s office together with black and white wood louvers. The red is dominant but broken up and balanced by the white open part of the shelf. `,
      ],
      image: [
        "/Portfolio/Interior/Office/5/1.jpg",
        "/Portfolio/Interior/Office/5/2.jpg",
        "/Portfolio/Interior/Office/5/3.jpg",
        "/Portfolio/Interior/Office/5/4.jpg",
        "/Portfolio/Interior/Office/5/5.jpg",
        "/Portfolio/Interior/Office/5/6.jpg",
      ],
    },
  ];

  const commercialData = [
    {
      title: "Was style ",
      description: [
        ` This modern barbershop design is divided into three major zones; waiting area, styling area, and shampoo area. The reception area is placed directly in front of the entrance and it includes a white and brown colored reception desk. The ceiling design flows along the walls and ends right above the reception desk.`,
        ` It is located on the fourth floor of a building and it has glass curtain walls on 3 sides meaning the styling stations could not be placed along walls like most traditional barbershops. Three styling stations that serve on both sides were created in the center of the space. `,
        `A ceiling design that defines this styling zone is created using gypsum boards and black-painted metal pipes. There is a strip LED light that lights up the pipes creating a beautiful stripped shadow on the ceiling`,
        `The shampoo area’s ceiling is decorated using custom-made sky planters with built-in light bulbs. When a customer is on his back getting their hair washed they see an interesting greenery on the ceiling. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/1/1.jpg",
        "/Portfolio/Interior/Commercial/1/2.jpg",
        "/Portfolio/Interior/Commercial/1/3.jpg",
        "/Portfolio/Interior/Commercial/1/4.jpg",
        "/Portfolio/Interior/Commercial/1/5.jpg",
        "/Portfolio/Interior/Commercial/1/6.jpg",
      ],
    },
    // {
    //   title: "Commercial Interior",
    //   description: [],
    //   image: [
    //     "/Portfolio/Interior/Commercial/2/1.jpg",
    //     "/Portfolio/Interior/Commercial/2/2.jpg",
    //   ],
    // },

    {
      title: "Abyssinia pharmacy",
      description: [
        `This design was done for a franchise pharmacy company meaning the design had to be standardized. The modular sales counters give the flexibility to be used both in large and small franchise spaces. We just increase and decrease the number of modules according to the size of spaces available. `,
        `The same is true on the shelving. Modular shelving is used. The number of shelves is calculated according to the size of the space. `,
        `The brand colors (blue and white) are mixed with warm oak texture to create a cozy feeling in the space rather than the conventional white which is sometimes cold and robotic. `,
        `A mix of white and darker floor finish is used to create a continuity with the walls and ceiling, yet create a contrast with them and avoid making the space plane and whitewashed.`,
        `A darker rich textured timber is used on the furniture to contrast the white walls and ceiling. Natural timber texture creates a cozy and rich environment for the customers. `,
        `Warm lights are used to create a cozy feeling inside the space. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/4/1.jpg",
        "/Portfolio/Interior/Commercial/4/2.jpg",
        "/Portfolio/Interior/Commercial/4/3.jpg",
        "/Portfolio/Interior/Commercial/4/4.jpg",
        "/Portfolio/Interior/Commercial/4/5.jpg",
        "/Portfolio/Interior/Commercial/4/6.jpg",
      ],
    },

    {
      title: "ASHENAFI SPA ",
      description: [
        `Reception
The spa is divided into two main sections; men’s side and women’s side. The reception desk serves both sections and therefore is open on all but one side.
White and lighter shades of beige with golden trimmings are used to lighten up the space.
`,
        `Women salon
The idea is to create a luxurious feminine space as this section is a female salon. The arched styling stations together with the arch-shaped mirrors with LED lights are wall-to-wall which makes them look like they have been carved out of the wall.
 `,
        `Luxurious quality is added to the space through the use of golden trimmings and a gold louver ceiling. The dark marble table and countertops add an earthly character without losing the luxurious feeling.  `,
        `Metal and frosted glass privacy screens are used. The shape works well with the other dominant curved shapes used in the space `,
        `Men’s salon
It follows a similar concept as the women’s salon with one key difference. The arches and feminine curves are replaced by a rectangular shape and darker finishes on the styling stations.
The ceiling is also more modest and goes under the radar.
 `,
        `Spa
The spa is intended to be filled with nature and earthly tones. The rough textured wallpapers mimic that of natural limestone. The center of the lounge area is decorated luxurious golden mirrored ceiling with a small Japanese maple tree as a centerpiece.
`,
        `Arched walls and wall decorations are used together with plants accented by LED lights. `,
        `The massage room is decorated with a wavy layered ceiling design and a very tropical wallpaper.


-	Branding and creating an identity for your business will help it become more recognizable.
-	The perfect place to sit and watch the hustle and bustle of Downtown Phoenix.
-	Pulling together each and every corner. Blending new with the old to create an individualized space.
-	A lounge space created with unique pieces of furniture that work so well with the existing architecture
-	Adding warm textures in the bathroom adds contrast to the cool tile selection, creating a bathroom oasis.
-	A living space designed after creating conversation. Facing two sofas toward each other gives you a great amount of space to accompany your friends. Using neutrals to keep the space calm and inviting while adding blue accents that give the space personality.
-	An open floor plan gives you ease when entertaining a large group. With the kitchen open to the living space it gives the room a sense of airiness and continuity that you can feel throughout the apartment.
`,
      ],
      image: [
        "/Portfolio/Interior/Commercial/9/1.png",
        "/Portfolio/Interior/Commercial/9/2.png",
        "/Portfolio/Interior/Commercial/9/3.png",
        "/Portfolio/Interior/Commercial/9/4.png",
        "/Portfolio/Interior/Commercial/9/5.png",
        "/Portfolio/Interior/Commercial/9/6.png",
        "/Portfolio/Interior/Commercial/9/7.png",
        "/Portfolio/Interior/Commercial/9/8.png",
        "/Portfolio/Interior/Commercial/9/9.png",
      ],
    },
  ];

  const residentialData = [
    {
      title: "Ahmed residence ",
      description: [
        `The apartment entryway is decorated using UV boards and wood-textured panels. Protrusion and intrusion of the two types of claddings are accented by LED strip lights as well as scone wall lights. `,
        `The space is a blend of neoclassical style and a dash of modern design. The decorative frames used on the ceiling and walls create a sense of detail and sophistication in the space. Various-sized and shaped wall moldings are used to create wall decorations that are repeated throughout the project. `,
        `The parquet floor together with the wood and marble claddings on some parts of the wall gives the space a cozy and earthly feeling. `,
        `An open floor plan gives you ease when entertaining a large group. With the kitchen open to the living space it gives the room a sense of airiness and continuity that you can feel throughout the apartment. `,
        `The kitchen is the heart of the home. The warm texture compliments the cool dominantly white environment to create a space that is the perfect place to prepare for your next dinner party. `,
        `Rough textured fabrics in different shades of gray are used on the furniture `,
        `The relatively small master bedroom is warm inviting and full of texture and patterns. The bed background is made using oak textured louvers and upholstery wall cladding to create a warm and cozy feeling. `,
        `The use of similar wall and floor tiles in the master bathroom give the space a sense of continuity. The patterns on the tiles continue even inside the shower box. The black tiles used around the vanity make it a focal point of the design in the center of the room`,
      ],
      image: [
        "/Portfolio/Interior/Residential/1/2.jpeg",
        "/Portfolio/Interior/Residential/1/3.jpeg",
        "/Portfolio/Interior/Residential/1/4.jpeg",
        "/Portfolio/Interior/Residential/1/5.jpg",
        "/Portfolio/Interior/Residential/1/6.jpg",
        "/Portfolio/Interior/Residential/1/7.jpg",
        "/Portfolio/Interior/Residential/1/8.jpg",
        "/Portfolio/Interior/Residential/1/9.jpg",
      ],
    },
    {
      title: "Murad Residence",
      description: [
        `The unique thing about the space is that it contains both a modern-style living room but also an Arabian-style seating area. The two spaces are zoned separately by the two different ceiling designs used accordingly. They are also visually broken up using a wooden privacy screen which doubles as a bookshelf. `,
        `The longer shape of the bedroom is visually separated into three zones through the design of the false ceiling. The floral pattern on the wallpaper goes well with the crystal light used at the center of the room. `,
      ],
      image: [
        "/Portfolio/Interior/Residential/2/1.jpg",
        "/Portfolio/Interior/Residential/2/2.jpg",
        "/Portfolio/Interior/Residential/2/3.jpg",
        "/Portfolio/Interior/Residential/2/4.jpg",
        "/Portfolio/Interior/Residential/2/5.jpg",
      ],
    },
    {
      title: "Haymanot Residence",
      description: [
        `selectively antique motifs that are lavish but not loud. `,
        `
The wall moldings used are not overdone and are accented by some dark wood wall claddings giving it contrast. The luxurious chandelier at the center of the room elevates the space. The doors are decorated in the same way in golden color frames to stay consistent with the theme.
`,
        `The muted color pallet used on walls and on the furniture exhibit effortlessness. The fireplace divides the space into two equal parts creating symmetry and it becomes a focal point in the room and the seating area around it. `,
        `The neoclassical theme continues into the master bedroom. The focal point backdrop is the dark oak wood panel cladding. The dark color of the wood gives balance to the light colors. `,
        `The floral patterns on the beddings add a classic ornamented quality to the space. `,
        `The hallway is tilled in white porcelain, giving it a clean, airy, sharp quality. The wall lights light up your path as you walk through. The gypsum false ceiling with its LED strip light gives the space a floating feeling `,
      ],
      image: [
        "/Portfolio/Interior/Residential/3/1.jpg",
        "/Portfolio/Interior/Residential/3/2.jpg",
        "/Portfolio/Interior/Residential/3/3.jpg",
        "/Portfolio/Interior/Residential/3/4.jpg",
      ],
    },
    {
      title: "Demis Residence",
      description: [
        `As soon as you enter you are greeted by a double-story entryway covered in high-rising marble and warm oak textured louvers. The low-hanging modern led pendant illuminates the space in a soft warm light.
         The open living dining space is separated by a sharp sleek modern privacy screen made of metal. `,
        `White and a shade of brown are used as a color pallet. The color pallet is expressed in different materials like marble sheets, wooden louvers, kitchen cabinets, trimming ceiling paint, and also metal profiles. `,
        `Simplicity in form and function with this modern kitchen design. Sleek black countertops pair well with the clean lines of the slab carpentry to create a seamless flow in the space.`,
        `The golden brown trimmings used on the gypsum board cove lighting defines and gives the design emphasis and turns it into a statement on its own. `,
      ],
      image: [
        "/Portfolio/Interior/Residential/4/1.jpg",
        "/Portfolio/Interior/Residential/4/2.jpg",
        "/Portfolio/Interior/Residential/4/3.jpg",
        "/Portfolio/Interior/Residential/4/4.jpg",
      ],
    },
  ];
  const hospitalityData = [
    {
      title: "Commercial Interior",
      description: [],
      image: [
        "/Portfolio/Interior/Commercial/2/1.jpg",
        "/Portfolio/Interior/Commercial/2/2.jpg",
      ],
    },
    {
      title: "Shewit Restaurant ",
      description: [
        `The very high room height is further exaggerated by the use of bold deep arches on the walls. `,
        `The blue color introduces a light airy feeling into the space. The dark brown color of the ceiling `,
        `The existing brown tiles and the wooden furniture create a balance with the white and blue colors. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/3/1.jpg",
        "/Portfolio/Interior/Commercial/3/2.jpg",
        "/Portfolio/Interior/Commercial/3/3.jpg",
      ],
    },

    {
      title: "Smoothie delight",
      description: [
        `This is a small café with a serving area that is 15m2 (3m*5m). There is an additional 8m2 kitchen at the backside. There was a limited amount of seating and the space was dark and old.  `,
        `We created a window for the kitchen to open up the space and create a different vibe to the space. This also extends the space visually. `,
        `A light shade of salmon color is chosen as a bold statement wall. White arch wall claddings and the white louvered decorations soften the boldness of the color. The arched glass door opens the space to another serving space in addition to giving the space a modern character `,
        `The wall piece made using metal pipes and Australian pine wood gives a different character and vibe to the stools placed against it. `,
        `All the furniture is custom-made. The warm wood finish works well with the black metal. The benches have a built-in planter to introduce freshness to the space through the greenery. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/5/1.jpg",
        "/Portfolio/Interior/Commercial/5/2.jpg",
        "/Portfolio/Interior/Commercial/5/3.jpg",
        "/Portfolio/Interior/Commercial/5/4.jpg",
        "/Portfolio/Interior/Commercial/5/5.jpg",
        "/Portfolio/Interior/Commercial/5/6.jpg",
        "/Portfolio/Interior/Commercial/5/7.jpg",
        "/Portfolio/Interior/Commercial/5/8.jpg",
        "/Portfolio/Interior/Commercial/5/9.jpg",
      ],
    },
    {
      title: "Tona",
      description: [
        `The idea is to create a clean and simple café which can be a hub where all parts of the community come and spend time. It is predicated on creating different spatial qualities that respond to different age groups. The seating arrangement, furniture style and lighting are used to create different spatial qualities. `,
        `The existing site needed a lot of work and the unavailability of a high ceiling height meant most of the design had to be done on the walls and the furniture to be used. `,
        `Shorter chairs in the middle part of the space to avoid visual obstacles in the space. `,
        `Elevated seating arrangements on the window side, a cozy sofa/ lounge seating are and normal table seating arrangements in the middle.`,
        `A white ceiling and walls are used to make the space lighter and create the illusion of being wide by reflecting all of the natural light that we can get. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/6/1.jpg",
        "/Portfolio/Interior/Commercial/6/2.jpg",
        "/Portfolio/Interior/Commercial/6/3.jpg",
        "/Portfolio/Interior/Commercial/6/4.jpg",
        "/Portfolio/Interior/Commercial/6/5.jpg",
        "/Portfolio/Interior/Commercial/6/6.jpg",
      ],
    },
    {
      title: "NATIONAL VILLAGE ",
      description: [
        `The large restaurant is designed in an industrial style. The exposed metal trusses are painted black. And it has hanging pendant lights on it. `,
        `The ceiling is finished in light oak with a mix of white gypsum board. The white, the wood, and the black create a natural balance in the space together with the parquet flooring. `,
        `Plenty of natural light floods the space the windows all around the walls. The light bouncing on the glossy table tops and the floors gives the space a modern character. `,
        `The outdoor seating area has a retractable roof. The space is protected from the harsh sun and at night the roof opens up to unleash the outdoor vibe. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/7/1.jpg",
        "/Portfolio/Interior/Commercial/7/2.jpg",
      ],
    },
    {
      title: "Lily’s cafe",
      description: [
        `A fast food restaurant design that follows the bold color pallets of such spaces but tries to add elegant qualities to the space. The space is comfortable and inviting to spend longer periods of time as opposed to the usual fast food restaurants that are based on circulating customers in short periods of time. `,
        `The sofa seating uses the already existing structural columns to its advantage as a space separator between tables. The sofas are further defined and decorated using metal arches. The wall planters behind give it another layer. The red wall paint is contrasted with the yellow metal sheet wall cladding. `,
        `The space is very wide and had a ‘hall’ kind of feeling so timber false columns along with a high chair with a built-in planter are used to break up the space and create smaller cozy spaces. `,
        `The window seats are visually screened using arch metal mesh privacy screens.  `,
        `Darker and lighter shades of wood are used in the space to balance out the bold red-colored walls. The simple white ceilings give the space a sense of continuity. `,
      ],
      image: [
        "/Portfolio/Interior/Commercial/8/1.jpg",
        "/Portfolio/Interior/Commercial/8/2.jpg",
        "/Portfolio/Interior/Commercial/8/3.jpg",
        "/Portfolio/Interior/Commercial/8/4.jpg",
      ],
    },
  ];
  return (
    <>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[2rem] sm:text-[2rem]">
                OFFICE INTERIORS
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2">
            <Image
              src={quots}
              alt="quots"
              width={25}
              height={25}
              className="mt-4"
            />

            <div className="h-full flex item-center justify-center lg:mt-5 lg:mr-5">
              <span className="xs:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem]">
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider data={officeData} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                HOSPITALITY INTERIORS
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2">
            <Image
              src={quots}
              alt="quots"
              width={25}
              height={25}
              className="mt-4"
            />

            <div className="h-full flex item-center justify-center lg:mt-5 lg:mr-5">
              <span className="xs:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem]">
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider data={hospitalityData} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                COMMERCIAL INTERIORS
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2">
            <Image
              src={quots}
              alt="quots"
              width={25}
              height={25}
              className="mt-4"
            />

            <div className="h-full flex item-center justify-center lg:mt-5 lg:mr-5">
              <span className="xs:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem]">
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider data={commercialData} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                RESIDENTIAL INTERIORS
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2">
            <Image
              src={quots}
              alt="quots"
              width={25}
              height={25}
              className="mt-4"
            />

            <div className="h-full flex item-center justify-center lg:mt-5 lg:mr-5">
              <span className="xs:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem]">
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider data={residentialData} />
      </>
    </>
  );
}

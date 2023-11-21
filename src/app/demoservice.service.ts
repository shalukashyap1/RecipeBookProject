import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  Data=[
    {
      id:1,
      name:'Lauki Tart Halwa Recipe',
      items:`1 - 500 gm bottle gourd,
             2 - 150 gm sugar,
             3 - 1/4 teaspoon powdered green cardamom,
             4 - 15 gm cashews,
             5 - 200 gm ghee,
             6 - 200 gm khoya,      
             7 - 15 gm almonds,
             8 - 4 pastry shells`,
      
      body:`Step 1 Prepare the bottle gourd
      Rinse, peel and grate the lauki (bottle gourd) after removing the hard centre portion.
      
      Step 2 Saute the grated lauki
      Heat ghee in a heavy pan on medium flame. Add the grated lauki and mix very well with the ghee. Cook the grated llauki on medium flame while stirring continuously until the moisture evaporates.
      
      Step 3 Halwa preparation
      Add sugar and sauté till the lauki halwa turns thick. Now add Khoya and keep stirring to avoid burning. Switch off the flame now.
      
      Step 4 Add nuts
      Add roughly chopped nuts and cardamom powder to the halwa. Mix well.
      
      Step 5 Add to tarts and serve
      Take readymade tart shell, fill them with the halwa, garnish with more nuts and serve hot. Enjoy!`,
      img:'https://th.bing.com/th/id/OIP.ur0LdFd89nEszwDM5THuDQHaEu?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      id:2,
      name:'Cheesy Quinoa Nachos Recipe',
      items:`1 - 70 gm nachos,
             2 - 100 gm jalapeno cheese sauce,
             3 - 60 gm boiled frozen sweet corn,
             4 - 60 gm tomato,
             5 - 60 gm sliced jalapeno,
             6 - 100 gm thinly sliced onion,
             7 - 100 gm mozzarella,
             8 - piri piri seasoning as required`,
      body:`Step 1 Layer the nachos
      To begin with this easy recipe, take a microwave safe ceramic plate and arrange the nachos and overlap them properly.
      
      Step 2 Add toppings
      Spread the cheesy jalapeno dip over nachos follwed by veggies and sliced jalepenos. Layer them nicley.
      
      Step 3 Bake for 2 minutes and enjoy
      Sprinkle mozzarella cheese evenly on the nachos and sprinkle seasoning. Next, bake in a pre-heated oven at 350 *F for 2 minutes or till cheese melts. Remove from oven and serve with dips.`,
      img:'https://i.cdn.newsbytesapp.com/images/l158_24821594314551.jpg',
    },
    {
      id:3,
      name:'Festive Kashmiri Naan Bread Recipe',
      items:`1 - 250 gm all purpose flour,
             2 - 40 gm ghee,
             3 - 5 gm salt,
             4 - 150 ml full cream milk,
             5 - 15 gm flaked almonds,
             6 - 5 gm tutti-frutti,
             7 - 50 gm almond flour,
             8 - 8 gm dry yeast,
             9 - 50 gm powdered sugar,
            10 - 1/2 gm saffron,
            11 - 5 gm cranberries,
            12 - 5 gm dry rose petals`,
      body:`Step 1 Prepare saffron milk and sift the dry ingredients
      To prepare this delicious Kashmiri bread, put a pan on medium flame and warm milk in it. Once done, add saffron to it and let it soak for 2-3 minutes. In a dough kneading plate, sift together all-purpose flour, almond powder/flour, yeast, salt to taste, and powdered sugar.
      
      Step 2 Knead the dough and keep aside for 20 minutes
      Add ghee to it and mix well. Then, add this saffron-soaked warm milk and knead the dough. Next, divide the dough into 2 equal parts and leave for 20 minutes to leaven.
      
      Step 3 Place the dough on baking sheet
      Now, take a baking sheet and line a baking pan with it. Give each dough a round shape using your hands and place it on the baking sheet. Their thickness should be 1/2 inch. Next, top the dough with almond flakes, cranberries, tutti frutti and dry rose petals.
      
      Step 4 Proof the dough for 5 minutes and bake at 180 degrees C
      Allow the dough to proof for 5 minutes and then bake it at 180 degrees C for 2-3 minutes or till golden in colour. Enjoy it warm!`,
      img:'https://i.ytimg.com/vi/21lUHoH3GyY/maxresdefault.jpg',
    },
    {
      id:4,
      name:'Porridge Tikki Recipe',
      items:` 1 - 200 gm boiled broken wheat (dalia),
              2 - 15 gm ginger,
              3 - 5 ml virgin olive oil,
              4 - 5 gm yellow chili powder,
              5 - salt as required,
              6 - 100 gm boiled potato,
              7 - 10 gm green chilli,
              8 - 20 gm coriander leaves,
              9 - 5 gm black cumin seeds `,
      body:`Step 1 Mix all the ingredients
      Mix porridge with boiled potato in a bowl. Add chopped ginger, green chillies, coriander leaves, yellow chilli powder, black cumin seeds and salt. Use a spoon or your hands to mash and mix everything to make a dough.
      
      Step 2 Divide into portions
      Divide the dough into 8-10 equal portions.
      
      Step 3 Make flat tikkis
      Wet your hands with a little water and flatten each portion, into a disk or tikki of two to three inches in diameter.
      
      Step 4 Shallow fry the tikkis
      Shallow fry in oil until golden patches appear. Make more such tikkis with the leftover portions.
      
      Step 5 Ready to be served
      Pair up with tomato ketchup or mint chutney and serve the crispy Porridge Tikkis.`,
      img:'https://th.bing.com/th/id/OIP.sI6NK77Xge9jFmsb8CvGUAEXDf?pid=ImgDet&rs=1',
    },
    {
      id:5,
      name:'Creamy Corn Chaat Recipe',
      items:`1 cup boiled american corn kernels,
             2 - 5 cherry tomatoes,
             3 - 1 slice lemon slices,
             4 - 1 tablespoon red chilli powder,
             5 - 2 tablespoon sev,
             6  - 2 tablespoon chopped coriander leaves,
             7  - 1/2 cup cubed zucchini,
             8  - 1/2 cup chopped red bell pepper,
             9  - 1/2 tablespoon chilli flakes,
            10  - 1 tablespoon butter,
            11  - 2 tablespoon garlic mayonnaise,
            12  - salt as required`,
      body:`Step 1 Saute the veggies
      Heat butter in a pan. Add chopped zucchini and red bell pepper. Saute for 1 min on medium flame. Now add corn and roast for another minute.
      
      Step 2 Add the seasonings
      Now add red chilli powder, chilli flakes and salt as per taste. Give a good mix.
      
      Step 3 Garnish and serve
      Take out the mixture in a bowl. Garnish with cherry tomatoes, lemon, coriander leaves, sev and garlic mayo. Give a toss and serve.`,
      img:'https://www.jerseygirlcooks.com/wp-content/uploads/2023/06/corn-ntomato-salad-square-500x500.jpg',
    },
    {
      id:6,
      name:'Keto Veg Manchurian Recipe',
      items:`1 - 1/2 cup chopped cauliflower,
             2 - 1/2 cup chopped capsicum (green pepper),
             3 - 1 cup chopped onion,
             4 - refined oil as required,
             5 - salt as required,
             6 - 1 teaspoon ginger paste,
             7 - 1/2 cup chopped cabbage,
             8 - 1/2 cup cubed paneer,
             9 - 1/3 cup flax seeds,
            10 - 1 green chilli,
            11 - 1 teaspoon garlic paste,
            12 - 1 tablespoon soy sauce`,
      body:`Step 1 Mixing veggies
      Take all the veggies, finely chopped cauliflower, cabbage, capsicum, paneer, onion, flax seeds, green chili and salt. Give them a very good mix. (Save some onions and capsicum to put in gravy)
      
      Step 2 Making Manchurian balls
      Make round balls with this vegetable mixture. Deep fry these balls in hot oil on a medium flame until golden brown. Repeat this process for all vegetable balls and keep them aside.
      
      Step 3 Manchurian gravy
      Now for the gravy, heat 2 tbsp oil in a pan and add ginger and garlic paste. Sauté for a minute. Add finely chopped onion, capsicum and sauté for another minute. Add soy sauce and and mix it well.
      
      Step 4 Mixing balls and gravy
      Now add 1/2 cup water and let it boil for4-5 minutes. Add your fried Manchurian balls to the mixture and cook for another 5 minutes. You can increase or decrease the amount of water according to the amount of gravy you want.
      
      Step 5 Garnish and final touches
      Garnish with chopped spring onions and serve along with noodles for a perfect combo meal.`,
      img:'https://1.bp.blogspot.com/-VCkjsS1Tfmo/XgzLILEh5oI/AAAAAAAAACA/Yg7TKYf6VYUlNm33vg35es80Zq3yRMJLwCLcBGAsYHQ/s1600/manchuri.jpg',
    },
    
  ];

  
  getData(){
    return this.Data;
  }
  getdescriptionById(id:number){
    return this.Data.find(d=>d.id===id)
  }
  
}

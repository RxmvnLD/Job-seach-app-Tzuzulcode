# FontAwesome

1. Imports:

   ```jsx
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
   ```

2. Use:

   ```jsx
   {
     /*<FontAwesomeIcon icon={iconStyle("iconName")} />*/
   }
   <FontAwesomeIcon icon={solid("moon")} />;
   ```

# Styled Components & Tailwind CSS with twin.macro

1. Imports:

   ```jsx
   import tw from "twin.macro";
   ```

2. Setting styles:

   ```jsx
   //Inside react functional component
   <Link to="/home">{<StartButton>START BROWSING</StartButton>}</Link>;

   //tw.html element
   const Header = tw.header`
   //tailwind classes
   
   container
   text-center
   `;

   const StartButton = tw.button`
   w-full
   h-full
   p-2
   rounded-lg
   bg-secondary
   text-secondary
   `;
   ```

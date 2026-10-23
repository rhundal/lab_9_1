### Objective Of This Assignment

- Create reusable React components with TypeScript interfaces for props
- Implement proper prop handling and validation.
- Use component composition effectively
- Apply TypeScript best practices for component development
- Document components with clear prop interfaces

#### Reflection Quesitons

- How did you handle optional props in your components?
  - By making use of ? next to it in the type which was given to us. Since it is optional, one way to handle it is not pass any props for it in the component, another way is to pass a value for it. I passed functions for the optional props by declaring functions in the App.tsx component.
- What considerations did you make when designing the component interfaces?
  - when designing interfaces for components in the main component App, I imitiated the interfaces declared for the respective types (user, product etc) declared in the index.ts (types file)
- How did you ensure type safety across your components?
  - By importing respective (AlertBoxProps, UserProfileCardProps, ProductDisplayProps) props types/interfaces from the types file and checking for props type in the components against these types.
- What challenges did you face when implementing component composition?
  - I struggled initally with understanding how to utilize react functional components returned by the respective components but it became obvious after I looked at what the composition example was suppsoe to look like, it made sense then calling the respective components and designing those components internally to handle the required props was the next step.

#### How to run my project

- cd component-library
- cd component-library-lab/
- npm install
- npm run dev

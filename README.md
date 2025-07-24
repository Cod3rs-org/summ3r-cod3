# Summ3r Cod3

A showcase of summer coding projects built during July-August. Build whatever you want this summer, win cool merch if people vote for your project!

## How to Contribute

### Adding Your Project

1. **Fork this repository**
   - Click the "Fork" button at the top right of this repository

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/summ3r-cod3.git
   cd summ3r-cod3
   ```

3. **Create a new project file**
   - Navigate to the appropriate year folder: `src/pages/projects/YEAR/`
   - If the current year folder doesn't exist, you can create it
   - Create a new MDX file with a unique name (e.g., `your-project-name.mdx`)

4. **Add your project details**
   - Use the following template for your MDX file:

   ```mdx
   ---
   layout: "../../../layout/ProjectPostLayout.astro"
   title: "Your Project Title"
   description: "A brief description of your project (1-2 sentences)"
   author: "Your Name"
   github_user: "https://github.com/yourusername"
   pubDate: "2025-07-01"
   projectStats: [
     { label: "Started", value: "July 2025" },
     { label: "Status", value: "In Development" },
     { label: "License", value: "MIT" }
   ]
   ---

   import { Image } from 'astro:assets';

   <section>
     <div class="lr px-1 py-3">
       <h2>Project Overview</h2>
       <p>A more detailed description of your project.</p>

       <h3>Features</h3>
       <ul>
         <li>Feature 1</li>
         <li>Feature 2</li>
         <li>Feature 3</li>
       </ul>

       <h3>Technologies Used</h3>
       <div class="d-flex flex-wrap gap-2 mb-4">
         <span class="badge bg-secondary">Technology 1</span>
         <span class="badge bg-secondary">Technology 2</span>
         <span class="badge bg-secondary">Technology 3</span>
       </div>
     </div>
   </section>
   ```

5. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "Add my project: PROJECT_NAME"
   git push
   ```

6. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select the main repository as the base repository
   - Write a brief description of your project
   - Submit the Pull Request

### Project Guidelines

- Projects must be created during the July-August timeframe
- Your project should be your own original work
- Include accurate information about technologies used
- Keep descriptions concise and informative
- Make sure your markdown formatting is correct

### Running the Project Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   - Navigate to `http://localhost:4321` (or the port shown in your terminal)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions, feel free to open an issue in this repository.
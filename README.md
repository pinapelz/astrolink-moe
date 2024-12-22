# Astrolink-Moe: LinkTree Alternative Template to share about yourself

A derivative of the original [Astrolink](https://github.com/alamguardin/Astrolink) but now more moe

Changes:
- Moe CSS theme added and some layout changes from the original
- You can render custom markdown files by placing markdown files in `public/md` and then visiting `/md?q=MDFileName`


```sh
git clone https://github.com/pinapelz/astrolink-moe.git
```

![Preview](https://github.com/user-attachments/assets/533f0b94-4739-48b9-a4ab-60679b5d3f37)

## 🚀 How to change the content?

To change the content of the templates, simply locate the ```user.json``` file inside the data folder. You can change the name, profession, and the links you want.

Oh, additionally, you have the entire iconography of [Remixicons](https://remixicon.com/) available. You just need to write the name of the icon within the ```"icon"``` key of each link in the ```user.json``` file.



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

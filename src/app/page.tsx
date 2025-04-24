import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

// Dados de exemplo - você deve substituir por seus próprios dados
const projects = [
  {
    id: "1",
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://projeto1.com",
    github: "https://github.com/seu-usuario/projeto1",
  },
  // Adicione mais projetos aqui
];

const skills = [
  {
    name: "React",
    level: 90,
    icon: "/react-icon.png",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: "/typescript-icon.png",
  },
  // Adicione mais habilidades aqui
];

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section id="sobre" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Sobre Mim</h2>
            <p className="text-xl text-text-color-100 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar soluções inovadoras e
              experiências digitais excepcionais.
            </p>
          </div>
        </section>

        <section id="projetos" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Contato</h2>
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

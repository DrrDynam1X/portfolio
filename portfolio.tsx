import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold">DrrDynam1X</h1>
          <p className="text-gray-300 mt-2">Roblox Developer Portfolio</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge>Scripter (Lua)</Badge>
            <Badge>Voice Actor</Badge>
            <Badge>UI Designer</Badge>
            <Badge>Tester</Badge>
            <Badge>Game Idea Designer</Badge>
          </div>
        </motion.div>

        <Separator />

        {/* Identity */}
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Roblox Identity</h2>
            <div className="space-y-1">
              <p><strong>Username:</strong> DrrDynam1X</p>
              <p><strong>Groups:</strong> Midnight Studios, Blitz Interactive</p>
              <p><strong>Platform:</strong> Roblox</p>
            </div>
          </CardContent>
        </Card>

        {/* Intro */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a versatile Roblox developer passionate about creating engaging gameplay experiences and polished user interfaces. With expertise in Lua scripting, UI design, and game mechanics, I specialize in building immersive systems that keep players engaged. Whether it's developing core game systems, crafting compelling dialogue, or ensuring quality through rigorous testing, I bring a comprehensive skill set to every project. I'm dedicated to turning creative ideas into reality through collaboration and attention to detail.
            </p>
          </CardContent>
        </Card>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">The Social Gauntlet: 10 Rounds to Glory</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">UI</Badge>
                <Badge variant="outline">Scripting</Badge>
              </div>
              <p className="text-gray-300">
                Developed comprehensive UI systems and dialogue mechanics to enhance player interaction and storytelling.
              </p>
              <p className="text-sm text-gray-500">Status: <span className="text-yellow-400">TBD</span></p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">ENTITY_Ø</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Voice Acting</Badge>
                <Badge variant="outline">Testing</Badge>
              </div>
              <p className="text-gray-300">
                Provided voice acting and conducted thorough gameplay testing to ensure quality and balance.
              </p>
              <p className="text-sm text-gray-500">Status: <span className="text-yellow-400">TBD</span></p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            
            <div className="space-y-2">
              <p><strong className="text-blue-400">Lua Scripting:</strong> <span className="text-gray-300">Intermediate</span></p>
              <p className="text-sm text-gray-400">Proficient in building scalable and maintainable game systems</p>
            </div>

            <div className="space-y-2">
              <p><strong className="text-blue-400">Game Systems:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Datastore (player data persistence)</li>
                <li>Leaderstats (player statistics tracking)</li>
                <li>UI Systems (static and dynamic interfaces)</li>
                <li>Interactive UI (buttons, menus, animations)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p><strong className="text-blue-400">Game Design:</strong> <span className="text-gray-300">1–2 page detailed concepts</span></p>
              <p className="text-sm text-gray-400">Capable of creating comprehensive game design documents with mechanics, narrative, and progression systems</p>
            </div>

            <div className="space-y-2">
              <p><strong className="text-blue-400">Testing:</strong> <span className="text-gray-300">Quality Assurance</span></p>
              <p className="text-sm text-gray-400">Identifies confusing mechanics, pacing issues, and fun balance problems to ensure optimal player experience</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-2">
              <p><strong className="text-blue-400">Paid Work:</strong> <span className="text-gray-300">Available for meaningful projects</span></p>
              <p><strong className="text-blue-400">Free Work:</strong> <span className="text-gray-300">Accepted when the project is well-structured or has creative merit</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Proof / Links */}
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Proof & Links</h2>
            <div className="space-y-2">
              <p><strong className="text-blue-400">Discord Server ID:</strong> <span className="font-mono text-gray-300">1295130761480896533</span></p>
              <p className="text-sm text-gray-400">Join to see screenshots, videos, and live demos of systems I've built</p>
            </div>
          </CardContent>
        </Card>

        {/* Looking For */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Looking For</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Scripter (Basic Systems)</Badge>
              <Badge>Voice Acting</Badge>
              <Badge>Testing</Badge>
              <Badge>Game Idea Development</Badge>
              <Badge>UI Design (Basic)</Badge>
            </div>
            <p className="text-sm text-gray-400 pt-2">Open to collaborating on exciting Roblox projects in any of these roles!</p>
          </CardContent>
        </Card>

        <footer className="text-center text-gray-500 pt-10 border-t border-gray-800">
          © {new Date().getFullYear()} DrrDynam1X • Roblox Developer Portfolio
        </footer>
      </div>
    </div>
  );
}
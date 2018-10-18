import React from 'react';
import Modal from 'react-responsive-modal';
import RevolverOcelotBox from '../6-RevolverOcelot-Comments/RevolverOcelotBox'
import { Button } from 'reactstrap';
import RevolverOcelotStats from '../characters/RevolverOcelotStats'
import { ModalHeader } from 'reactstrap';
 
export default class RevolverOcelot extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className="welcomeBox" onClick={this.onOpenModal}>Enter</Button>
        <Modal open={open} onClose={this.onCloseModal} >
        <ModalHeader toggle={this.onCloseModal}></ModalHeader>
        <div>
        <img className="boxmodal" width="100%" src="https://img00.deviantart.net/1fe6/i/2015/029/b/0/metal_gear_solid_3_10th_anniversary___ocelot___by_darkdux-d8fuzta.png" alt="RevolverOcelotHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "It doesn’t feel right to shoot an unarmed man… but I’ll get over it."<br /> <br />
          </p>
          <h2>-Revolver Ocelot</h2>
          </center>
          <RevolverOcelotStats />
          <p>
          <br /> 
          Revolver Ocelot, real name Adamska (Russian: Адамска) or simply Adam (Russian: Адам), and also known as ADAM, Shalashaska (Russian: Шалашаска), or most commonly Ocelot (Russian: Оцелот), was a Russian-American operative of FOXHOUND and an agent of the Patriots. A master of interrogation and a formidable gunfighter, he was often referred to as a "ricochet genius" in regards to his gun fighting skills. A fanatic, he was known for his affinity towards Spaghetti Westerns, as evidenced by his choice of weapon and his clothing, duster and spurs, the traditional garb of cowboys. His weapon of choice was the Colt Single Action Army Revolver, which he regarded as "the greatest handgun ever made."
          <br /> <br />
          Throughout his career, Ocelot became personally acquainted with all five men codenamed Snake: a friendly rival to Big Boss, the right hand man for Liquid Snake and Solidus Snake, one of Venom Snake's top advisors, and a nemesis to Solid Snake. He was the son of The Sorrow, and the legendary soldier The Boss, given birth to on the battlefield. Specializing in infiltrations of a different nature than Solid Snake and Big Boss, Ocelot often acted as a triple agent, to serve multiple interests in the same situation.
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/a2/85/2b/a2852bab1f7414b9cfe4f0d0657964ef--revolver-ocelot-kojima-productions.jpg" alt="Shalashaka" />
          <br />
          <p>"You're Pretty Good.." </p>
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          A cunning operative and an expert marksman, Ocelot was renowned for his prowess on the battlefield as well as his deceitful nature and his penchant for torture. His marksmanship skills were demonstrated as early as the Virtuous Mission, when, back when he was still using a Markov, he proceeded to kill a KGB soldier trying to hide from him simply via the use of the bullet's ricochet. Likewise, he also proceeded to kill Sergei Gurlukovich and Scott Dolph by firing at them despite having discarded his trenchcoat right in front of himself, and also managed to subsequently gun down several Gurlukovich mercenaries before they could get the chance to avenge their leader.
          <br /> <br />
          In his earlier years as a GRU major, Ocelot originally did not approve of the torture used by his superior Colonel Volgin. He was also dead set against killing his own comrades, especially his own fellow countrymen. However, after witnessing Volgin's torture sessions with Granin and Naked Snake in Groznyj Grad, he developed a fondness for the practice, believing it to be "the ultimate form of expression." Due to this experience, he would go on to torture many individuals in a similar manner throughout his career, often with a preference for the application of electrical shocks. Despite being a renowned sadist, he dismissed the word "torture" in reference to his interrogation techniques.
          <br /> <br />
          As a young man, Ocelot was extremely arrogant, overly confident and had a large ego. He enjoyed showing off and was quick to inform others of his rank and status in the military. Such as when a KGB guard simply referred to him as Ocelot, he then quickly reminded the man that his full title was "Major" Ocelot. He was proud of his shooting abilities and his own self believed superiority over others. However his first encounter with Big Boss, then known as Naked Snake, slowly began altering his personality. After being defeated after each encounter, Ocelot began utilizing Snake's advice into his own combat style, making him a more effective gun fighter. While still cocky, Ocelot became more level-headed, understood the mistakes he made and became a better soldier because of it. Despite his young age, Ocelot demonstrated a lot of potential, which caused Big Boss, known at the time as Naked Snake, to take a liking to him and kept Eva from killing him. Ocelot also developed a mutual admiration and liking to Big Boss.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/46/50/8b/46508b2c4dd3a564b392fc8ceed84639--metal-gear-solid-the-phantom.jpg" alt="tppOcelot" />
          </center>
          <br /> <br />
          <p>
          Ocelot was also highly intelligent and a fast learner, learning CQC techniques from observation and eventually using them to fight Naked Snake to a stalemate. He was an expert of psychotherapy and hypnosis, such as when he made Venom Snake and himself believe that the former was truly Big Boss in 1984, as well as his planned ruse of assuming Liquid's identity in 2014.
          <br /> <br />
          In contrast to his more vicious and treacherous behavior, Ocelot had grown to display a more calm demeanor during the events of the 1980s. He'd also become noticeably more mellow when compared to his brash and reckless behavior during the Virtuous Mission and Operation Snake Eater. He implied, while commenting on his moniker "Shalashaska", that the reputation he'd earned as a torturer in Afghanistan was in part a cover calculated to keep Venom Snake safe while he was in the hospital. Ocelot, having finally inherited his mother's vast wisdom, comparatively speaking, acted as a voice of reason within Diamond Dogs, capable of making and enacting precise threats to obtain information from prisoners as opposed to Kaz's often hotheaded, sometimes bloodthirsty behavior. He often gave people the benefit of the doubt, even if they tried to kill Venom Snake.
          <br /> <br />
          One example being with Quiet, whom he tried to persuade to keep alive as a source of information. He didn't react badly to her breaking out of her cell to go with Venom Snake on missions as long as she behaved. Ocelot relayed his understanding of Quiet's motives as being "in love with the legend" which he likens to his own fixation over Big Boss in which he claims that he was "the same way once." While Ocelot insisted on interrogating the young Liquid Snake in contrast to Miller's disagreement and protest at the idea, he did not act violently towards him. Though his personality and methodology were more subdued at the time, he was still willing to use others to his and Big Boss's benefit, such as using the hospital staff in Cyprus as decoys and even deceiving Miller with regards to Venom Snake's identity while taking an antagonistic stance against him upon revealing him the truth behind Big Boss's intentions.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/58/bc/57/58bc57dea4a169b261e9ccf303804e05--gear-art-wii-games.jpg" alt="tppOcelot" />
          </center>
          <br /> <br />
          <p>
          Owing to his deceitful nature, Ocelot displayed treachery when it suited his goals, betraying both Sergei Gurlukovich and Solidus Snake during the Tanker and Big Shell Incidents, respectively. His treachery was such that his triple-crossing nature was considered notorious by the 1980s. When he was younger, Ocelot appeared to show patriotism toward Russia, always speaking up in defiance of Volgin's reckless killing of their fellow countrymen. He claimed to have no good feelings after killing KGB soldiers guarding Sokolov when he first confronted Big Boss, even with his affiliation to GRU, and he looked genuinely shocked when Volgin launched the Davy Crockett at Sokolov's research facility. Despite ultimately having no loyalty to Russia, Ocelot nonetheless did lament her state after the fall of the Soviet Union.
          <br /> <br />
          While Ocelot seemingly remained loyal to the Patriots since their founding in 1971, his eventual transformation into Liquid Ocelot, and the reason behind his assuming of such a role, proved otherwise. Ocelot's loyalties had always been questioned, although EVA stated that his loyalties belonged to Big Boss. Many of his battle tactics (using a Single Action Army and learning CQC) were adopted from Big Boss's advice and observation of him. This idolization was also the reason why Ocelot joined Liquid Snake's FOXHOUND, due to Big Boss's former membership, although this reason was unknown to Liquid himself. Ocelot believed that Liquid was the only person who could achieve his goal of true anarchy, sharing the view that by creating a world of chaos, à la Outer Heaven, everyone would know "the fullness of life," with Ocelot likening it to "the Wild West all over again."
          <br /> <br />
          Liquid Snake suspected that part of the reason Ocelot liked revolvers was due to his sadistic nature: the ammunition's slow velocity allowed it to be imbedded in the body, which required a long time for the body to heal, if the resulting wound could even heal at all. Ocelot also enjoyed the thrill of reloading his Single Action Army in the middle of battle, despite the inherent dangers of doing so. By 2014, Ocelot had discarded the use of his signature revolver, due to the "Liquid" persona. During the 1960s, Ocelot had a habit of using signature hand gestures as a sign of respect or acknowledgement towards others. While the frequency of his use of said hand gestures would dwindle over the years, he would use them again in 2014 to signify his respect towards Solid Snake during their fistfight atop Outer Haven, as well as during his final moments.
          <br /> <br />
          Although Ocelot lost only his right hand to Gray Fox, he later had his entire arm replaced. In 2009, Ocelot took a hypodermic injection to supposedly prevent Liquid Snake's arm from exerting control over him. During this occasion, his heart seemingly gave two heartbeats, as heard by Raiden, using a directional microphone. By 2014, Ocelot had switched Liquid's arm for a cybernetic prosthesis to restore balance to his psyche.
          <br /> <br />
          While discussing his transplanted arm with Solidus Snake, the surgery of which was performed in Lyon, Ocelot mentioned that he "never trust[ed] a Frenchman." He implied in a conversation with Big Boss about Les Enfants Terribles shortly after the latter woke up from his nine-year coma that the reason behind his distaste for the French ways was due to their aristocratic manners and their praise of Catherine the Great, demanding they can keep the "palace talk." Ironically, Ocelot was born in Normandy, France, and his preferred method of torture (electrocution) was developed by the French military during the Indochina War, and then used during the Algerian War. It was nicknamed "La Gégène," an abbreviation of Génératrice, which means "Generator."
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/95/18/fd/9518fd618ff188bc555912d2e5f890c4--freak-games-mgs-v.jpg" alt="mgs3Bridge" />
          </center>
          </div>
        <RevolverOcelotBox />
        </Modal>
      </div>
    );
  }
}
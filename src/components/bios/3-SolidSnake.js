import React from 'react';
import Modal from 'react-responsive-modal';
import SolidSnakeBox from '../3-SolidSnake-Comments/SolidSnakeBox'
import { Button } from 'reactstrap';
import SolidSnakeStats from '../characters/SolidSnakeStats'
import { ModalHeader } from 'reactstrap';
 
export default class SolidSnake extends React.Component {
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
        <img className="boxmodal" width="100%" src="http://cuteweblinks.info/images/Solid-Snake-Wallpapers/Solid-Snake-Wallpapers-11.jpg" alt="SSHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "Unfortunately, killing is one of those things that get easier the more you do"   <br /> <br />
          </p>
          <h2>-Solid Snake</h2>
          </center>
          <SolidSnakeStats />
          <p>
          <br /> 
          Solid Snake, real name David, also known as Old Snake, and briefly known as Iroquois Pliskin, or simply Snake, was a former spy, special operations soldier, and mercenary. Possessing an IQ of 180 and fluent in six languages, he was known as "the Man Who Makes the Impossible Possible" and his exploits made him into a living legend among the military black ops.
          <br /> <br />
          A product of the Les Enfants Terribles project, Snake was a clone of world renowned soldier Big Boss, along with his brothers Liquid Snake and Solidus Snake. Initially a Green Beret, Snake was later inducted into High-Tech Special Forces Unit FOXHOUND in the mid 1990s while it was commanded by Big Boss. Repeatedly tasked with disarming and destroying the latest incarnation of Metal Gear, a bipedal nuclear weapon-armed tank, Snake would thrice avert potential nuclear catastrophe, becoming a famed war hero.
          <br /> <br />
          Following the Shadow Moses Incident and subsequent smear campaign by the Patriots, the secret organization behind American politics, Snake was labeled a terrorist. He faked his own death in the Manhattan Tanker Incident, though he re-emerged years later to assist Raiden in the Big Shell Incident. During this time, his body entered a state of accelerated aging, due to intentional genetic changes made during the cloning process, causing his health to decline.
          <br /> <br />
          In 2014, Snake performed his final mission, during which he defeated Liquid Ocelot and destroyed the Patriots. After one last encounter with Big Boss, Snake chose to live his remaining days in peace.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/30/8b/36/308b36ed1303f0a11e92e944635a1f3a--gear-art-videogames.jpg" alt="mgs4" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          Solid Snake, a hardened career soldier, often displayed a calm and collected demeanor, rarely showing any signs of fear in extreme circumstances. He buried his emotions deep inside himself, causing some to see him as cold and uncaring. Despite this perceived attitude, Snake occasionally showed a more human side, expressing great concern for allies' well being during dangerous operations, and even demonstrating compassion towards fallen enemies. During the Zanzibar Land Disturbance, Snake claimed to be different from Big Boss, and that he loved life. Unlike his clone brothers, Snake never displayed anger over his origins and accepted who he was.
          <br /> <br />
          Though mostly reserved, Snake showed some prominent change in his outlook towards life throughout the years. Big Boss's betrayal in 1995 and his battle to the death with Gray Fox and again with Big Boss in 1999 left a deep-seated emotional pain leading to PTSD, alcoholism and cynicism. His reunion with Gray Fox at Shadow Moses, as well as his newfound friendship with Otacon and love towards Meryl, invigorated his desire to live. With Philanthropy, Snake aspired towards building a better future for the world by eradicating Metal Gears and liberating humanity from digital subjugation. His accelerated aging, however, would create a morbid willingness to accept death as he was no longer exuberant in his words or actions in 2014. It was only by Big Boss's dying words that Snake was finally able to absolve himself of all guilt and torment and accept peace.
          <br /> <br />
          Though he was born with what were known as Big Boss's "flawed recessive genes," he defeated Liquid Snake, the clone with the "dominant genes" on multiple confrontations in 2005. Unlike Liquid and Solidus who spent their lives under the pressure of Big Boss's legend, Snake did not burden himself with such weight and defiantly sought out a life of his own. In the end, his indomitable will for justice made him the final survivor and victor among the clones because he lived through Naomi Hunter's theory spoken in Shadow Moses: not "to be chained to fate."
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/6c/55/b2/6c55b22b95bf2c94d1479c7f853bbaa9--video-game-posters-video-game-console.jpg" alt="OldSnake" />
          </center>
          <br /><br />
          <p>
          Due to his extensive military background, Snake found his calling on the battlefield, having spent most of his life there, and believed it was the only place where he felt truly alive. Because of this, he was often accused of enjoying the killing in warfare, by both allies and enemies. Although Snake refused to admit to such views, his clone brother Liquid believed that he was in self denial, while Psycho Mantis remarked that he was even "worse" in this regard than Liquid himself. Despite conceding that he was "heartless," Snake showed himself to be self-sacrificing and with a strong belief that even on a battlefield friendship and love can flourish, and that violence is not glorious. Even so, Snake rejected any idea that he was a hero, in the face of praise and admiration from fellow operatives. Though willing to take on the mission to Shadow Moses, Snake showed no sign of longing for the army or the country he was part of. Snake also had a disdain for politicians.
          <br /> <br />
          During the events of the Guns of the Patriots Incident, Snake calmly accepted the inevitability of his impending death. Because of this, he was more willing to risk his life, as demonstrated during the Missouri debriefing. However, he would often become annoyed upon being reminded of his accelerated age, once telling Otacon to "cut the senior citizen crap" and his psyche dropping at occasional moments when called "Old Snake." When Raiden offered to head to the microwave-protected server room on Outer Haven, Snake refused, saying that Raiden shouldn't "waste [his] youth." Through sheer willpower, Snake survived passing through the corridor, and went on to defeat Liquid Ocelot in hand-to-hand combat. Naomi stated an ordinary person wouldn't even be able to stand in his condition in 2014 and the only thing keeping him mobile, albeit limitedly, is his will. Big Boss noted that Snake had always fought for something more than himself. Big Boss also noted that if Snake had been in his place then the mistakes that he had made may not have come to pass. By this time, Snake had also developed an apprehension to nanomachine injections, due to Naomi's betrayal at Shadow Moses, and initially refused to allow Drebin 893 to administer a shot to him.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/9d/5b/98/9d5b980c93cdd9d396eb26159a19b295--metal-gear-online-gear-art.jpg" alt="bnw" />
          </center>
          </div>
        <SolidSnakeBox />
        </Modal>
      </div>
    );
  }
}
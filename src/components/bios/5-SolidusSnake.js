import React from 'react';
import Modal from 'react-responsive-modal';
import SolidusSnakeBox from '../5-SolidusSnake-Comments/SolidusSnakeBox'
import { Button } from 'reactstrap';
import SolidusSnakeStats from '../characters/SolidusSnakeStats'
import { ModalHeader } from 'reactstrap';
 
export default class SolidusSnake extends React.Component {
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
        <img className="boxmodal" width="100%" src="https://cdna.artstation.com/p/assets/images/images/000/142/652/large/eliant-elias-solidus-snake.jpg?1418855697" alt="SolidusSnakeHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "We’re all born with an expiration date. No one lasts forever. <br /> Life is nothing but a grace period for turning our genetic material into the next generation.<br /> The data of life is transferred from parent to child. That’s how it works. But we have no heirs, no legacy. Cloned from our father with the ability to reproduce conveniently engineered out. <br />What is our legacy if we cannot pass the torch? Proof of our existence – a mark of some sort.”"<br /> <br />
          </p>
          <h2>-Solidus Snake</h2>
          </center>
          <SolidusSnakeStats />
          <p>
          <br /> 
          Liquid Snake, real name Eli, also known as White Mamba (Kikongo: "Nyoka ya Mpembe"), McDonell/Master Miller, or simply Liquid, was the leader of FOXHOUND during the Shadow Moses Incident. He was cloned from Big Boss's DNA as part of the Les Enfants Terribles project, along with his brothers Solid Snake and Solidus Snake. Liquid was led to believe that he had been created in order to express Big Boss's recessive genetic traits, and as such, was "inferior" to Solid Snake who supposedly had received Big Boss's dominant genes. Liquid therefore held a strong resentment towards Solid and wished to defeat him in combat, reclaiming what he felt was his birthright, and thus proving his superiority.
          <br /> <br />
          Possessing an IQ of 180, Liquid spoke seven languages fluently, including English, Spanish, French, Malay, Arabic and Kikongo. His main language, English, was also spoken with an English accent of the Received Pronunciation dialect during adulthood, and a Central London dialect during his childhood. He was almost an exact double of Solid Snake in terms of appearance, with the only distinguishable feature being his darker skin tone and fair hair color. He also had a tattoo on his left arm, which resembled the Rod of Asclepius, but with a sword in its place and with the words "Temptation Revelation."
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/cb/6f/09/cb6f0914cfb0a7f8886aeba2ea185881--kojima-productions-metal-gear-solid.jpg" alt="SolidusArt" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          Liquid Snake displayed an arrogant and extroverted attitude in stark contrast to Solid Snake's more calm and collected personality. He was described as having an "attitude problem" by Miller. He was incredibly resentful and bitter towards Big Boss, believing he had been knowingly chosen by the man to be his "inferior" clone, whereas his brother Snake was endowed with "superior" genes. This drove him to surpass his supposed genetic destiny, and in essence, his father. His hatred was such that when Snake compared him to the then-detained Naomi Hunter regarding his motives, Liquid didn't even deny it. When he was younger, his hatred for Big Boss was intense enough that he reacted violently to even the mere mention of the subject of fathers or even parents, as evidenced by his becoming threatening to one of the soldiers in his squad when the latter relayed to him how his own father was doing with his work in the mines, as well as his instantly attacking Venom Snake when they first met after the latter expressed doubts that his parents named him "White Mamba", and was also severe enough that it overpowered both Skull Face and Volgin's control over Tretij Rebenok (both of whom did so due to their mutual hatred of Big Boss). In addition, he bore hatred towards the Patriots as he had hunted them down for some time, and vowed to deal with them in such a manner as to "cause even the reaper's stomach to turn." He was also shown to have a lot of self-loathing to the extent of being suicidal in his younger years, as evidenced by his comment about freeing himself from his cursed heritage when about to fight Venom Snake, his lamentation about his fate being written into his genes, as well as his deeply considering suicide until he was convinced otherwise.
          <br /> <br />
          As a young boy, Liquid despised adult authority due to his handlers' treatment of him and broke away from them while in Africa to form his own personal militia. When Venom Snake captured him, Liquid did not say a word to him and rudely refused Venom Snake's offers of help. He hated being treated as a kid, as when Venom Snake patted him on the back, Liquid almost immediately tried to kill him by taking his knife, only to have his right arm dislocated, which Snake immediately put back after lecturing him about respect and loyalty. Even as a young child, Liquid showed psychopathic behavior, laughing in delight as he escaped Mother Base with Sahelanthropus and obsessively focusing his life on killing Venom Snake. The destruction Liquid caused while telepathically controlling the Metal Gear shocked even Skull Face himself. He also was bad at understanding basic biology.
          <br /> <br />
          Due to his genetic engineering and being endowed with Big Boss' superior soldier genes, Liquid had enhanced strength, speed, durability, knowledge and skills in combat. He was better than the average soldier, easily disarming and pinning one to the ground. Being a commander of a troop of child soldiers who raided several villages, he even held his own against Venom Snake in hand to hand combat, dodging and countering his CQC attacks and even evading his gunfire while pinning him to a metal wall with a plastic chair.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/cc/52/48/cc52487f97872ab40a23becd833536e3--metal-gear-solid-pixiv.jpg" alt="swords" />
          </center>
          <br /> <br />
          <p>
          As he got older, his fighting and physical prowess had strengthened even more. He became the youngest member of the Special Air Service, excelling at parachuting, rappelling, Scuba diving, free climbing, and use in small arms and military vehicles. Liquid became the squad commander of FOXHOUND, possessed an IQ of 180, spoke seven languages (English, French, Spanish, Malay, Kikongo, and Arabic speaking it like a native).
          <br /> <br />
          In contrast to Solid Snake and Big Boss, Liquid showed an apparent lack of compassion and loyalty to his allies and only seemed to view them as pawns at best. After Snake defeated Psycho Mantis and Sniper Wolf, Liquid thought they were pathetic and foolish for not fighting more effectively. In addition, before Vulcan Raven fought Snake for the final time, Liquid told him "[his] existence [was] no longer needed in this world." He also implied that the only reason he even bothered trying to get Big Boss's genes to cure the various Genome Soldiers of their genetic problems was more due to feeling compelled to do so via sharing the same genes and self-interest rather than genuinely caring for their well being. However, he did seem to possess some skewed sense of pride and honor by letting Snake live to fight him unbound and unarmed in a one-on-one duel (presumably in an attempt to feed his ego). Despite his nature, Liquid was shown to be merciful as he let Meryl live when Ocelot offered to kill her. However, he did this moreso to use her as a pawn against Snake.
          <br /> <br />
          In large part because of his upbringing and his knowledge of how he was conceived, he harbored a belief that he should follow what his genes told him, under the hopes that he would surpass his genetic destiny. He also largely believed for the same reasons that he couldn't become anything else than a soldier, and wouldn't have the right to even possess a real name, reacting angrily at one point when Snake claimed that he did have a name other than his codename. His loathing of his real name had been there since his youth, as he reacted violently when one of his fellow soldiers addressed him as such.
          <br /> <br />
          Liquid often displayed high levels of endurance, having survived numerous, seemingly fatal, events over the course of his life. This survivability could be attributed to him possessing the dominant genes of Big Boss and, therefore, superior physical abilities compared to other clones. 
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/a1/36/39/a13639692a5debb9e5acb2425590a857.jpg" alt="SolidusHandDrawn" />
          </center>
          </div>
        <SolidusSnakeBox />
        </Modal>
      </div>
    );
  }
}
import Link from "next/link";

const FAQPage = () => {
  return (
    <div className="mx-auto p-4">
      <p className="py-4 text-center">
        Bienvenue dans notre FAQ dédiée à l'amélioration de votre frappe au
        clavier. Nous sommes là pour répondre à vos questions et vous aider à
        devenir un maître de la frappe au clavier.
      </p>

      <hr className="my-6 h-0.5 dark:bg-white" />

      <div className="py-8">
        <h2 className="text-xl font-semibold">Comment nous contacter ?</h2>
        <p className="mt-4">
          Vous pouvez nous contacter en utilisant le formulaire de contact en
          cliquant{" "}
          {
            <Link className="underline" href="/contact">
              ici
            </Link>
          }
          . Notre équipe est prête à répondre à toutes vos questions et à vous
          fournir l'assistance dont vous avez besoin.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-xl font-semibold">
          Quelles sont vos heures d'assistance ?
        </h2>
        <p className="mt-4">
          Notre équipe d'assistance est disponible du lundi au vendredi de 9h00
          à 17h00 (heure locale).
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-xl font-semibold">
          J'ai des douleurs aux poignets en tapant. Que puis-je faire ?
        </h2>
        <p className="mt-4">
          Si vous ressentez des douleurs aux poignets, assurez-vous d'avoir une
          posture ergonomique. Utilisez un clavier confortable, gardez vos
          poignets droits et faites des pauses régulières. Si la douleur
          persiste, consultez un professionnel de la santé.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-xl font-semibold">
          Je suis un ergothérapeute, comment faire pour ajouter un patient dans ma liste de suivi ?
        </h2>
        <p className="mt-4">
          Pour ajouter une nouveau patient dans votre liste de suivi, plusieurs cas s’offre à vous.
          <br/>
          <br/>
          Si le patient est mineur, alors il vous faudra renseigner l’adresse mail de la personne légale qui representera ce patient (un parent etc...), cette personne.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-xl font-semibold">
          Je suis un ergothérapeute, comment gérer les patients qui me sont affiliés ?
        </h2>
        <p className="mt-4">
          Si vous ressentez des douleurs aux poignets, assurez-vous d'avoir une posture ergonomique. Utilisez un clavier confortable, gardez vos poignets droits et faites des pauses régulières. Si la douleur persiste, consultez un professionnel de la santé.
        </p>
      </div>
    </div>
  );
};

export default FAQPage;

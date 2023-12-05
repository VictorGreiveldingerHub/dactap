import Link from "next/link";

const TermOfUsePage = () => {
  return (
    <div className="mx-auto p-4">
      <div className="py-4">
        <h1 className="text-3xl font-semibold mb-4">
          Conditions Générales d'Utilisation
        </h1>

        <p>
          Bienvenue sur le site Dactap, dédié aux personnes atteintes de
          dyspraxie et aux ergothérapeutes. Avant d'utiliser notre application,
          veuillez lire attentivement les présentes Conditions Générales
          d'Utilisation. L'utilisation de Dactap est soumise à votre acceptation
          inconditionnelle et à votre respect des termes énoncés dans ces CGU.
          <br />
          L'utilisation de l'application est également régie par notre Politique
          de Confidentialité, que vous êtes invité à consulter pour comprendre
          comment nous collectons, utilisons et protégeons vos informations
          personnelles.
          <br />
          En acceptant les CGU, vous confirmez que vous remplissez les
          conditions d'éligibilité pour utiliser l'application et que vous vous
          engagez à respecter l'ensemble des dispositions énoncées dans les
          présentes CGU.
          <br />
          Si vous avez des questions concernant ces CGU, veuillez nous contacter
          à l'adresse indiquée dans la section "Contact" des présentes
          conditions.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">1. Éligibilité</h2>
        <p>
          En accédant et en utilisant l'application Dactap, vous déclarez et
          garantissez que vous répondez aux critères suivants d'éligibilité :
        </p>

        <div className="ml-2 my-4">
          <h3 className="text-lg font-semibold">1.1. Capacité légale</h3>
          <p>
            Vous déclarez avoir la capacité légale de conclure un contrat
            contraignant. Si vous êtes mineur(e), vous devez obtenir la
            permission de vos parents ou tuteurs légaux pour utiliser
            l'application.
          </p>
        </div>

        <div className="ml-2 my-4">
          <h3 className="text-lg font-semibold">1.2. Informations exactes</h3>
          <p>
            Vous vous engagez à fournir des informations exactes, complètes et à
            jour lors de l'inscription à Dactap. Vous acceptez de mettre à jour
            vos informations afin de garantir leur exactitude tout au long de
            votre utilisation de l'application.
          </p>
        </div>

        <div className="ml-2 my-4">
          <h3 className="text-lg font-semibold">
            1.3. Respect des lois locales
          </h3>
          <p>
            Vous acceptez de respecter toutes les lois et réglementations
            locales, nationales et internationales applicables à votre
            utilisation de Dactap.
          </p>
        </div>

        <p className="my-4">
          Si vous ne répondez pas à ces critères d'éligibilité, veuillez vous
          abstenir d'utiliser l'application. Nous nous réservons le droit de
          suspendre ou de résilier votre compte et votre accès à Dactap si nous
          avons des raisons de croire que vous ne respectez pas ces critères.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">
          2. Inscription et compte utilisateur
        </h2>
        <p>
          En créant un compte sur Dactap, fournissez des informations précises,
          protégez la confidentialité de vos identifiants, et soyez responsable
          de toute activité associée. Vous avez le droit de résilier votre
          compte à tout moment, et nous nous réservons le droit de le résilier
          en cas de non-respect des CGU. Utilisez l'application de manière
          légale, mettez à jour vos informations, et contactez-nous pour toute
          question.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">
          3. Collecte de données personnelles
        </h2>
        <p>
          En utilisant Dactap, vous consentez à la collecte et au traitement de
          vos données personnelles conformément à notre Politique de
          Confidentialité. Nous collectons des informations telles que votre
          nom, adresse e-mail, données d'utilisation, dans le but d'améliorer
          l'expérience utilisateur. Vous avez le droit de consulter, corriger,
          mettre à jour ou supprimer vos informations personnelles en accédant à
          votre compte ou en nous contactant.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">
          4. Confidentialité et sécurité des données
        </h2>
        <p>
          Nous prenons la protection de vos données personnelles très au
          sérieux. Vos informations seront traitées conformément à notre
          Politique de Confidentialité, qui décrit comment nous recueillons,
          utilisons, stockons et protégeons tes données.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">5. Modification des CGU</h2>
        <p>
          Nous nous réservons le droit de modifier les présentes CGU à tout
          moment, sans préavis. Il est de votre responsabilité de consulter
          régulièrement les CGU pour être informé des mises à jour. En
          continuant d'utiliser le Site après la publication des modifications,
          vous acceptez les CGU telles que modifiées.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">6. Responsabilité</h2>
        <p>
          Nous ne pouvons être tenus responsables du contenu que vous soumettez
          sur votre profil. Vous êtes le seul responsable du contenu et des
          conséquences liées à sa publication. En cas de signalement de contenu
          inapproprié, nous nous engageons à réagir rapidement et à prendre les
          mesures nécessaires.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">
          7. Droit applicable et juridiction compétent
        </h2>
        <p>
          Les présentes CGU sont régies par le droit français. En cas de litige
          relatif à l'interprétation ou à l'exécution des présentes CGU, les
          tribunaux français seront seuls compétents.
        </p>
      </div>

      <div className="py-4">
        <h2 className="text-xl font-semibold">8. Résiliation du compte</h2>
        <p>
          Nous nous réservons le droit de désactiver ou de supprimer votre
          compte en cas de non-respect des présentes CGU ou pour toute autre
          raison jugée nécessaire. Vous pouvez supprimer tout le contenu du
          profil afin de le rendre anonyme. Pour une demande de suppression
          complête de votre compte, veuillez nous contacter par{" "}
          {
            <Link className="underline" href="/contact">
              ici
            </Link>
          }
          .
        </p>
      </div>
    </div>
  );
};

export default TermOfUsePage;

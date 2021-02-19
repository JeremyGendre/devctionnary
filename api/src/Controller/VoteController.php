<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Service\VoteManager;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/vote")
 * Class VoteController
 * @package App\Controller
 */
class VoteController extends BaseAbstractController
{
    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="vote_post_one", methods={"POST"})
     * @param Snippet $snippet
     * @param VoteManager $voteManager
     * @return JsonResponse
     * @throws Exception
     */
    public function vote(
        Snippet $snippet,
        VoteManager $voteManager
    ): JsonResponse {
        $vote = $voteManager->voteForSnippet($snippet);

        if(!$vote){
            return $this->errorJsonResponse("Création du vote impossible");
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($vote);
        $em->flush();

        return $this->successJsonResponse($vote);
    }
}

<?php


namespace App\Controller;


use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\UserManager;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends BaseAbstractController
{
    /**
     * @Route("/api/login_check", name="login_check", methods={"POST"})
     */
    public function login(): JsonResponse
    {
        $user = $this->getUser();

        return $this->successJsonResponse([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }

    /**
     * @Route("/register", name="register", methods={"POST"})
     * @param UserManager $userManager
     * @param UserRepository $userRepository
     * @return JsonResponse
     * @throws Exception
     */
    public function register(
        UserManager $userManager,
        UserRepository $userRepository
    ): JsonResponse {
        $user = $userManager->createFromRequest();
        if(!$user){
            return $this->errorJsonResponse("Création de compte impossible");
        }

        $existingUser = $userRepository->findOneBy(['username' => $user->getUsername()]);
        if($existingUser){
            return $this->errorJsonResponse("Un utilisateur existe déjà avec le nom '" . $existingUser->getUsername() . "'");
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->successJsonResponse([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }
}

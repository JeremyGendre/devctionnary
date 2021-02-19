<?php

namespace App\Repository;

use App\Entity\SnippetValidation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SnippetValidation|null find($id, $lockMode = null, $lockVersion = null)
 * @method SnippetValidation|null findOneBy(array $criteria, array $orderBy = null)
 * @method SnippetValidation[]    findAll()
 * @method SnippetValidation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SnippetValidationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SnippetValidation::class);
    }

    // /**
    //  * @return SnippetValidation[] Returns an array of SnippetValidation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SnippetValidation
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

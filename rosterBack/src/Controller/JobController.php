<?php

namespace App\Controller;

use App\Entity\Job;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\JobRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/job")
 */
class JobController extends AbstractController
{
    /**
     * @Route("/", name="job_index", methods={"GET"})
     */
    public function index(JobRepository $jobRepository ): Response
    {
        $jobs = $jobRepository->findAll();
        $respond = $this->json($jobs, 200, []);
        return $respond;
    }
    /**
     * @Route("/{id}", name="job_show", methods={"GET"})
     */
    public function showJobStuff(Job $job): Response{
        return  $this->json($job, 200, [], ['groups' => 'jobStuff']);
    }
}

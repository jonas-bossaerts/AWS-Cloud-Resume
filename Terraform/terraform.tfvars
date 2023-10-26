# General Variables
region      = "eu-west-1"
aws_profile = "Jonas"

# EKS Variables
eks_cluster_name   = "EKS-Cluster"
kubernetes_version = "1.28"
keypair_name       = "Jonas-Keypair"
instance_type      = "m5.large"
ami_id             = "AL2_x86_64"

# VPC Variables
vpc_name        = "EKS-VPC"
cidr            = "192.168.0.0/16"
public_subnets  = ["192.168.64.0/19", "192.168.32.0/19", "192.168.0.0/19"]
private_subnets = ["192.168.160.0/19", "192.168.128.0/19", "192.168.96.0/19"]

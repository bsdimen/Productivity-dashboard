import React from 'react';
import { useQuery, useQueryClient, useMutation, UseMutateFunction } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {User} from "../TYPES/USER"

async function login(email: string, password: string): Promise<User> {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    if (!response.ok)
      throw new Error('Failed on sign in request');
      
  
    return await response.json();
  }
  
  type IUseSignIn = UseMutateFunction<User, unknown, {
    email: string;
    password: string;
  }, unknown>
  
  export function useSignIn(): IUseSignIn {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    const { mutate: signInMutation } = useMutation<User, unknown, { email: string, password: string }, unknown>(
      ({
        email,
        password
      }) => login(email, password), {
      onSuccess: (data) => {
        // TODO: save the user in the state
        navigate('/');
      },
      onError: (error) => {
        enqueueSnackbar('Ops.. Error on sign in. Try again!', {
          variant: 'error'
        });
      }
    });
  
    return signInMutation
  }


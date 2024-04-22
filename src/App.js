import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';

const fetchRepos = async (page) => {
  const response = await axios.get(`https://api.github.com/users/<your-username>/repos?page=${page}&per_page=20`);
  return response.data;
};
